<div align="center">
  <h1>MONOREPO</h1>
  <!-- <img style="width: 240px;" src="./docs/img/thumbnail.png"> -->
  <p>monorepo quick starter</p>
</div>

All things about monorepo frontend. you can see all changes in [CHANGELOG.md](./CHANGELOG.md)

- [Usage](#usage)
- [Release](#release)
  - [Versioning](#versioning)
  - [Process](#process)
- [Code Structure](#code-structure)
  - [Packages](#packages)
    - [`@monorepo/token`](#monorepotoken)
    - [`@monorepo/icons`](#monorepoicons)
    - [`@monorepo/core`](#monorepocore)
    - [`@monorepo/portal`](#monorepoportal)
- [Links](#links)

## Usage
```sh
gh repo clone ddalpange/monorepo-template
yarn install
yarn prepare
yarn dev
```

## Release

### Versioning

we're using the rule we discussed with QA engineers not semantic versioning.

`major` - we're not using.  
`minor` - sprint number  
`fetch` - count of deployments  

you can see all versions we deployed in package.json or [git tags](https://github.com/ddalpange/monorepo-template/tags)
if you want set new version, run this command
it will update [CHANGELOG.md](./CHANGELOG.md) and commit on your current branch with tag.

```
yarn versioning
# input your next version (now is 0.15.0)
0.15.1
```

### Process


**Big changes.**  
1. removed stg, prod branches. those are replaced with git tags.
2. create sprint release branch from main branch.
3. if QA engineer finds bug. you can fix it on sprint release branch.
4. you will increase fetch version on release branch and push tag (stg or prod) to git.
5. After sprint. merge release branch to main branch.
   
Example Flow.
```
main -> yarn versioning 0.15.0
main -> git checkout -B release/sp-15
release/sp-15 -> git tag -a stg 
release/sp-15 -> git push --follow-tags --force # replace old tag
# ... fixed some bugs ...
release/sp-15 -> yarn versioning 0.15.1
release/sp-15 -> git tag -a stg && git tag -a prod
release/sp-15 -> git checkout main
# ... completed sp-15 ...
main -> git merge release/sp-15
```

<div align="center">
  <img src="./docs/img/git_flow.jpg" style="max-width:100%;" />
</div>

## Code Structure 
**Monorepo tooling**

we're using [yarn workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/) and [ultra-runner](https://github.com/folke/ultra-runner)

you can run specific command to all package in `<root>` folder. ultra detect package's dependencies and sort out commands. 

I already defined useful shortcuts. define other thing if you want.
```
ultra -r yarn build
```
### Packages
#### `@monorepo/token`  
have minimal unit variables and style sheets. (It may be automatically created later.)
#### `@monorepo/icons`  
the Icons created automatically through the FIGMA API
#### `@monorepo/core`  
The actual React component implementation.
#### `@monorepo/portal`  
This product is provided to users

## Links
- [github](https://github.com/ddalpange/ddalpange/monorepo-template)