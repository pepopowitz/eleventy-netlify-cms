index.md
  ![Spoooky Kitty](/images/kitty-1.jpg)

view site - image doesn't show up!

./_site - no images!

.eleventy.js
  ```
  module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");

    return {
      passthroughFileCopy: true
    };
  };
  ```