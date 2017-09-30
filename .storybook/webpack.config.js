// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  const cssLoader = config.module.rules.find(l => l.test.test('.css'));
  cssLoader.use = [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true, // default is false
        sourceMap: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: '.storybook/postcss.config.js',
        },
      },
    },
  ];
  return config;
};
