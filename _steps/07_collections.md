problem: we want to show all our blog posts at blog/

add tags
  ```yaml
  tags: post
  ```

convert blog/index.md to blog/index.njk

  ```html
  <h1>Spooooooky Bloggy Kitties</h1>

  <div>
    <ul>
      {%- for post in collections.post -%}
        <li>
          <a href="{{post.url}}">{{post.data.title}}</a>
        </li>
      {%- endfor -%}
    </ul>
  </div>
  ```

order posts properly
  we could reverse them, but that's just as dependent on alpha as the current sorting.

add postsReversed collection
  .eleventy.js

    ```javascript
    eleventyConfig.addCollection("postsReversed", collection => {
      return collection.getFilteredByTag("post").reverse();
    });
    ```

update blog/index.njk
  ```
  {%- for post in collections.postsReversed -%}
  ```