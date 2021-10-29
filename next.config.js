module.exports = {
  webpack: (config) => {
    config.resolve.alias["mdi-material-ui"] = "@mitch528/mdi-material-ui";
    return config;
  },
};
