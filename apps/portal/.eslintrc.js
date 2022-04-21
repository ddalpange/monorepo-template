module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@riiid/eslint-config'],
  settings: {
    'import/internal-regex': ['^@src/', '^@public/'],
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@emotion'],
  ignorePatterns: ['**/stories/*', 'src/generated/*'],
  rules: {
    '@emotion/pkg-renaming': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useAsync|useAsyncFn)',
      },
    ],
  },
};
