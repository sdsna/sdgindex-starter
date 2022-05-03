module.exports = {
  exportPathMap: async (defaultPathMap) => {
    const paths = defaultPathMap;

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
