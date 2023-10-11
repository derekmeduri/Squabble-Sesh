// webpack.config.js
module.exports = {
    // ... other webpack configurations
    module: {
      rules: [
        // ... other rules
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        },
      ],
    },
  };