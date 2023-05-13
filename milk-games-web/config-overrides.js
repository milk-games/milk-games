const path = require('path');

module.exports = function override(config, env) {
  // Add a custom loader
  config.module.rules.push({
    test: /\.txt$/,
    use: 'raw-loader',
  });

  // Add an alias for importing modules
  config.resolve.alias['@components'] = path.resolve(
    __dirname,
    'src/components'
  );
  config.resolve.alias['@utils'] = path.resolve(__dirname, 'src/utils');
  config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');
  config.resolve.alias['@types'] = path.resolve(__dirname, 'src/types');
  config.resolve.alias['@styles'] = path.resolve(
    __dirname,
    'src/assets/styles'
  );
  config.resolve.alias['@actions'] = path.resolve(
    __dirname,
    'src/redux/features'
  );

  // Modify other webpack configurations if needed

  return config;
};
