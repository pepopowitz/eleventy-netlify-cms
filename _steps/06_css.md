add css/site.css

  ```css  
  body {
    background-color: black;
    color: orange;
  }

  a, a:visited, a:active {
    color: white;
  }

  img {
    width: 500px;
  }

  ul {
    display: inline-block;
  }
  ```

include css in layout
  ```html
  <link rel="stylesheet" type="text/css" href="/css/site.css" />
  ```

add passthrough copy
  ```javascript
  eleventyConfig.addPassthroughCopy("css");
  ```
  