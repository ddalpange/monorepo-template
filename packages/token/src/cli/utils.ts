import * as fs from 'fs';

export const addPrefixString = (name: string, prefix: string): string => {
  return `${prefix}_${name}`;
};

export const addPrefixOnObject = (obj: Record<string, string>, prefix: string): Record<string, string> => {
  const newObj: Record<string, string> = {};
  for (const key in obj) {
    newObj[addPrefixString(key, prefix)] = obj[key];
  }
  return newObj;
};

export const unpackingArrayObject = (obj: Record<string, string[]>): Record<string, string> => {
  const newObj: Record<string, string> = {};
  for (const key in obj) {
    obj[key].map((value, index) => (newObj[`${key}_${index + 1}`] = value));
  }
  return newObj;
};

export const toCssVariableExpression = (name: string): string => {
  return `'var(--${name})'`;
};

export const createStyleRule = (obj: Record<string, string>): string => {
  return `
:root {
${Object.entries(obj)
  .map(([key, value]) => `--${key.replace(/_/g, '-')}: ${value};`)
  .join('\n')}
}`;
};

export const createTokenRule = (obj: Record<string, string>): string => {
  return Object.keys(obj)
    .map(key => `export const ${key.toUpperCase()} = ${toCssVariableExpression(key.replace(/_/g, '-'))};\n`)
    .join('');
};

export function mkdirp(path: string): void {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, {recursive: true});
  }
}

export const writeText = (dest: string, text: string): void => {
  fs.writeFileSync(dest, text);
};
