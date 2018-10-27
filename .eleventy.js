module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("postsReversed", collection => {
    return collection.getFilteredByTag("post").reverse();
  });
  
  return {
    passthroughFileCopy: true
  };
};