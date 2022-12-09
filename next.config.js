const { getIndicators, loadData } = require("@sdgindex/data");

module.exports = {
  exportPathMap: async (defaultPathMap) => {
    const paths = defaultPathMap;

    await loadData();

    // Indicator maps
    delete paths["/carte/indicateurs/[slug]"];
    getIndicators()
      .filter((indicator) => !indicator.hidemap)
      .forEach(({ slug }) => {
        paths[`/carte/indicateurs/${slug}`] = {
          page: "/carte/indicateurs/[slug]",
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
