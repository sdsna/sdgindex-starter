const { getIndicators, loadData, getGoals } = require("@sdgindex/data");

module.exports = {
  exportPathMap: async (defaultPathMap) => {
    const paths = defaultPathMap;

    await loadData();

    // Dimensions maps
    delete paths["/carte/dimensions/[...params]"];
    getGoals().forEach(({ id }) => {
      paths[`/carte/dimensions/${id}`] = {
        page: "/carte/dimensions/[...params]",
      };
    });

    // Indicator maps
    delete paths["/carte/indicateurs/[...params]"];
    getIndicators()
      .filter((indicator) => !indicator.hidemap)
      .forEach(({ slug }) => {
        paths[`/carte/indicateurs${slug}`] = {
          page: "/carte/indicateurs[...params]",
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
