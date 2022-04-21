#!/usr/bin/env zx

import {$, fs, globby, path} from 'zx';

const jira = '';
const github = 'https://github.com/ddalpange/monorepo-template';
const tagFormat = 'v{version}';
const logFile = './CHANGELOG.md'
const rootPackageFile = './package.json';
const rootPackage = fs.readJSONSync(rootPackageFile);
const workSpacePackageFiles = await globby(rootPackage.workspaces.map(item => `${item}/package.json`));
const oldVersion = rootPackage.version;
const oldVersionTag = tagFormat.replace('{version}', oldVersion);
const newVersion = await question(`Input a new version (old version is ${oldVersion})`);
const newVersionTag = tagFormat.replace('{version}', newVersion);
const gitDiff = await getGitDiffFromPackages(oldVersionTag, workSpacePackageFiles);
const contents = linkOtherDocuments(gitDiff, github, jira);
await saveChangeLog(logFile, newVersionTag, contents);
for (const file of [...workSpacePackageFiles, rootPackageFile]) {
  await updateVersionToPackage(file, newVersion);
}
await commitAndTag(newVersionTag, markdownToText(contents));

/**
 * @param {string} file A file of package
 * @param {string} newVersion A version you will update to package
 */
async function updateVersionToPackage(file, newVersion) {
  await fs.writeJSON(file, {
    ...(await fs.readJson(file)),
    version: newVersion
  }, {
    spaces: 2
  });
}

/**
 * @param {string} versionTag 
 * @param {string} message 
 */
async function commitAndTag(versionTag, message) {
  await $ `git add -A`;
  await $ `git commit -m 'Release ${versionTag}'`;
  await $ `git tag -a ${versionTag} -m ${message} --force`;
}

/**
 * @param {string} file 
 * @param {string} versionTag 
 * @param {string} markdown 
 */
async function saveChangeLog(file, versionTag, markdown) {
  const changeLogTemplate = `# New Changes

All new changes are now documented in \`CHANGELOG.md\` files in each package's directory.

<!-- replace -->
`;

  const changeLog = await fs.pathExists(file) ?
    await fs.readFile(file).then(buffer => buffer.toString()) :
    changeLogTemplate;
  const newChangeLog = changeLog.replace('<!-- replace -->', `<!-- replace -->
  
## ${versionTag} (${new Date().toDateString()})

${markdown}
`);
  await fs.writeFile(file, newChangeLog);
}

/**
 * @param {string} targetVersionTag 
 * @param {string[]} packageFiles 
 * @returns {Promise<string>}
 */
async function getGitDiffFromPackages(targetVersionTag, packageFiles) {
  const gitLogFlags = [
    // {commitHash} {subject} [{author name}, {auth date YYYY-MM-DD}]
    '--pretty=format:- %H %s [%an, %as]'
  ];
  let result = '';
  for (const file of packageFiles) {
    const pkg = await fs.readJson(file);
    const {
      stdout: diff
    } = await $ `git log ${gitLogFlags} ${targetVersionTag}..HEAD ${path.resolve(file, '..')}`;
    if(diff) result += `\n### ${pkg.name}\n\n${diff}\n`;
  }
  return result;
}

/**
 * @param {string} original 
 * @param {string} github 
 * @param {string} jira 
 * @returns {string}
 */
function linkOtherDocuments(original, github, jira) {
  let result = original;
  if (jira) {
    result = result.replaceAll(/[a-zA-Z]+-[0-9]+/g, (matched) => `[${matched}](${jira}/browse/${matched})`)
  }
  if (github) {
    result = result.replaceAll(/#[0-9]+/g, (matched) => `[${matched}](${github}/pull/${matched.replace('#', '')})`);
    result = result.replaceAll(/[a-f0-9]{40}/g, (matched) => `[${matched.substr(0, 7)}](${github}/commit/${matched})`);
  }
  return result;
}

/**
 * @param {string} markdown 
 * @returns {string}
 */
function markdownToText(markdown) {
  return markdown
    // Remove inline links while preserving the links
    // .replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)")
    // Remove HTML tags
    .replace(/<[^>]*>/g, "")
    // Remove setext-style headers
    .replace(/^[=\-]{2,}\s*$/g, "")
    // Remove footnotes?
    .replace(/\[\^.+?\](\: .*?$)?/g, "")
    .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
    // Remove images
    .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, "")
    // Remove inline links
    .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1")
    // Remove blockquotes
    .replace(/^\s{0,3}>\s?/g, "")
    .replace(/(^|\n)\s{0,3}>\s?/g, "\n\n")
    // Remove reference-style links?
    .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
    // Remove atx-style headers
    .replace(
      /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
      "$1$2$3"
    )
    // Remove emphasis (repeat the line to remove double emphasis)
    .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
    .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
    // Remove code blocks
    .replace(/(`{3,})(.*?)\1/gm, "$2")
    // Remove inline code
    .replace(/`(.+?)`/g, "$1")
    // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
    .replace(/\n{2,}/g, "\n\n");
}