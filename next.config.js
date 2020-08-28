const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const plugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /.woff2$/i,
      use: 'url-loader',
    });
    return config;
  },
};

module.exports = plugins(
  [
    [
      withSass,
      {
        cssModules: true,
      },
    ],
    [
      withImages,
      {
        inlineImageLimit: 99999999,
      },
    ],
  ],
  nextConfig,
);
