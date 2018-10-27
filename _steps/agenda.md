0 - initialization
  a. already done:
    1. npm init
    2. git init
    3. .gitignore - node_modules/ & _site/
  
  b. install 11ty (@11ty/eleventy)
  c. add start script (eleventy --serve)
  d. add index.md (#, ##, * * *)
  e. npm start

1 - images
  a. add ![Spoooky Kitty](/images/kitty-1.jpg) to index.md
  b. view site: no image!
  c. view ./_site: no image!
  d. .eleventy.js:
      ```
      module.exports = function(eleventyConfig) {
        eleventyConfig.addPassthroughCopy("images");

        return {
          passthroughFileCopy: true
        };
      };
      ```

2 - other pages
  a. about.md
  b. blog/index.md
  c. 404.md

3 - netlify
  a. add build command to package.json ("eleventy")
  b. push
  c. configure in netlify
  d. permalink: 404.html in frontmatter

4 - layouts
  0. Problem: need meta & a header
  a. _includes/base.njk
    {{content}} only
  b. index.md
    set layout in frontmatter (---)
  c. Check site: ugly!
  d. Add | safe filter to base.njk.
  e. Add title to base.njk
  f. Add title content pages
  g. Add header to _includes/base.njk

5 - nested layouts
  a. add blog posts
  b. add blog.njk
  c. inherit from base.njk

6 - css
  a. add css/site.css
  b. include css in layout
  c. addPassthroughCopy('css');


7 - collections
  Problem: want to show all our blog posts at blog/
  a. add tags to yaml (tags: post)
  b. convert blog/index.md to blog/index.njk
  c. order posts properly
    we could reverse them in blog/index.njk, or in .eleventy.js
  d. add postsReversed collection
  e. reference collections.postsReversed

8 - netlify admin
  a. add admin folder
  b. admin/index.html
  c. admin/config.yml
  d. addPassthroughCopy('admin')
  e. add identity widget
  f. Netlify identity settings
    > Enable Identity
    > Open or Invite Only
    > Add Google provider
    > Enable Git Gateway
    > Invite User (me)
  g. Check email & accept invite
  h. sign in with google
  i. Make content!
  j. Show Git

9. THANK YOU!
@pepopowitz
steven.j.hicks@gmail.com



git log-1

git add .
git commit -m "message"
git push origin

git pull