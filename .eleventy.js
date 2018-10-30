module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  return {
    passthroughFileCopy: true
  };
};