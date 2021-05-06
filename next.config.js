module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Do not bundle JSON data on client
    if (!isServer) {
      config.plugins.push(new webpack.IgnorePlugin(/\/data\//));
    }

    return config;
  },
};
