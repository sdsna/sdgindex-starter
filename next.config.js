const { getIndicators, getGoals } = require("@sdgindex/data");

module.exports = {
  exportPathMap: async (defaultPathMap) => {
    const paths = defaultPathMap;

    // Dimensions maps
    delete paths["/map/dimensions/[...params]"];
    getGoals().forEach(({ id }) => {
      paths[`/map/dimensions/${id}`] = {
        page: "/map/dimensions/[...params]",
      };
    });

    // Indicator maps
    delete paths["/map/indicators/[...params]"];
    getIndicators()
      .filter((indicator) => !indicator.hideMap)
      .forEach(({ slug }) => {
        paths[`/map/indicators/${slug}`] = {
          page: "/map/indicators/[...params]",
        };
      });

    // Make sure that static paths have been set for all dynamic pages
    // All dynamic pages MUST be removed, e.g., delete paths["/[slug].js"]
    const dynamicPage = Object.keys(paths).find((path) =>
      path.match(/\[(.+)\]/)
    );
    if (dynamicPage)
      throw new Error(
        `Dynamic page in exportPathMap in next.config.js detected:  ${dynamicPage}`
      );

    return paths;
  },
};
