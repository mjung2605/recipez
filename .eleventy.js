/*
 *
 * returns all content that has 'type: "Rezept"' in its Front Matter
 */
module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("recipes", function(collectionApi) {
      const allItems = collectionApi.getAll();
      return allItems.filter(item => item.data.type === "Rezept");
    });
  };
  