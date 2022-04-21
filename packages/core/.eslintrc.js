module.exports = {
  root: true,
  extends: ['plugin:import/typescript', 'plugin:jest-dom/recommended', '@riiid/eslint-config'],
  settings: {
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  globals: {
    __html__: true,
    figma: true,
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: ['@emotion', 'eslint-plugin-jest-dom'],
  rules: {
    'no-undef': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-restricted-imports': 'off',
  },
  ignorePatterns: ['lib/**'],
};
