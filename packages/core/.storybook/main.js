const path = require('path');

module.exports = {
  staticDirs: ['../public'],
  refs: (_config, {configType}) => ({
    dsl: {
      title: 'Monorepo Portal Components',
      url: configType === 'DEVELOPMENT' ? 'http://localhost:6006' : '',
    },
  }),
  core: {
    builder: 'webpack5'
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: (config) => {
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
    
    return config;
  }
};
