const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  staticDirs: ['../public'],
  refs: (_config, {configType}) => ({
    dsl: {
      title: 'Design System Library Core',
      url: configType === 'DEVELOPMENT' ? 'http://localhost:6007' : '',
    },
  }),
  core: {
    builder: 'webpack5'
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
  ],
  webpackFinal: async (config) => {
    const emotionReactEleven = path.dirname(
      require.resolve('@emotion/react/package.json')
    );
    const emotionStyledEleven = path.dirname(
      require.resolve('@emotion/styled/package.json')
    );
    config.resolve.alias['@emotion/core'] = emotionReactEleven;
    config.resolve.alias['@emotion/styled'] = emotionStyledEleven;
    config.resolve.alias['@emotion-theming'] = emotionStyledEleven;
    config.module.rules[0].use = {
      loader: require.resolve('swc-loader')
    }
    config.module.rules[1].use = {
      loader: require.resolve('swc-loader')
    }
    config.resolve.plugins = [
      ...(config.resolve.plugins ?? []),
      new TsconfigPathsPlugin()
    ]
    return config;
  }
};
