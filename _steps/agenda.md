# Simplifying Content Management Demo

## ☑️ **-1. Setup (for me only)**

* Open slides in code
* Open demo in code
* Open terminal
* Check size of VS Code
* Open browser
  * http://localhost:3008
  * http://11ty.io
  * http://netlify.com
  * https://www.netlifycms.org/
  * https://github.com/pepopowitz/eleventy-netlify-cms/tree/fresh-start
* Left side: code; right side: browser
* Clicker

---

## **0. Initialization**

### ☑️ Already Done:

1. `npm init`
1. `git init`
1. .gitignore - `node_modules/` & `_site/`
1. Repo @ github set up
1. git remote added

### **Demo**:

#### ☑️ Create a new branch

`git checkout -b mkejs`

#### ☑️ Install 11ty as a dev dependency

`npm install --save-dev @11ty/eleventy`

#### ☑️ Add local development script

##### ./package.json (snippet: cms-0-0)

```json
"scripts": {
  "start": "eleventy --serve"
}
```

#### ☑️ Add index page

##### ./index.md (new) (snippet: cms-0-1)

```markdown
# Spoooooooky Kitties
## They will melt your heart and eat your brains

Other things they will eat:

* Candy Corn
* Dead Mice
* Hot Pockets
```

#### ☑️ Start local server

`npm start`

#### ☑️ Explain what 11ty is doing

---

## **1. Images**

We need images!

### **Demo**:

#### ☑️ Add image to index

##### ./index.md (snippet: cms-1-0)

```markdown
![Spoooky Kitty](/images/kitty-1.jpg)
```

#### ☑️ View site in browser: no image is showing!

#### ☑️ View `/images/kitty-1.jpg` in browser: not found!

#### ☑️ View `/_site` in code: no images folder!

#### ☑️ Explain why image isn't showing up

#### ☑️ Add config to copy images through

##### ./.eleventy.js (new) (snippet: cms-1-1)

```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  return {
    passthroughFileCopy: true
  };
};
```

#### ☑️ View site - image!

---

## **2. More Content**

Let's add some more content!

### **Demo**:

#### ☑️ Add "about" page

##### ./about.md (snippet: cms-2-0)

```markdown
# About Spooooky Kitties

* They are spooky!
* They want to eat your brains!
* They also want to cudddle!
```

#### ☑️ Add "blog index" page

##### ./blog/index.md (snippet: cms-2-1)

```markdown
# Spoooooooky Bloggy Kitties

They like to blog, and we'll put their posts here in the future.
```

#### ☑️ Add "404" page

##### ./404.md (snippet: cms-2-2)

```markdown
# Spoooooky Kitties
## Can't fiiiiind what you're looking foooooor

🐱 🤷‍♀️
🐱 🤷‍♀️
🐱 🤷‍♀️
```

---

## **3. Netlify**

Let's push this sucker live!

### **Demo**:

#### ☑️ Add build script

##### ./package.json (snippet: cms-3-0)

```json
"scripts": {
  ...,
  "build": "eleventy"
}
```

#### ☑️ `push` it real good!

```bash
git add .
git commit -m "Push this sucker live!"
git push origin
```

#### ☑️ Configure Netlify

* Sign in
* Connect to Github
* Connect to repo
* Change name
* Check out build log

#### ☑️ Check out live site!

Note: 404 page doesn't "work"

#### ☑️ Configure 404 page

##### ./404.md (snippet: cms-3-1)

```markdown
---
permalink: 404.html
---
```

#### ☑️ Confirm 404 shows for unknown url's

Netlify serves 404.html for unknown url's by convention.

---

## **4. Layouts**

We need to output **meta** and a **common header**

We don't want to copy & paste

### **Demo**:

#### ☑️  Add a base layout

##### ./_includes/base.njk (snippet: cms-4-0)

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Spooooky Kitties!</title>
  </head>
  <body style="text-align: center">
    {{ content }}
  </body>
</html>
```

#### ☑️ Consume base layout

##### ./index.md

```markdown
---
layout: base.njk
---
```

#### ☑️ View site: Yuck!

The HTML is encoded, so we actually see the source!

#### ☑️ Add "safe" filter to base layout

##### ./_includes/base.njk

```
{{ content | safe }}
```

We told the base layout that it was safe to render the content as HTML.

#### ☑️ Add title to layout

##### ./_includes/base.njk

```html
<title>...{{ title }}</title>
```

#### ☑️ Add title to content pages

##### ./index.md, ./about.md, ./404.md, ./blog/index.md

```markdown
---
title: XXXX
---
```

#### ☑️ Add header

##### ./_includes/base.njk (snippet: cms-4-1)

```html
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
  </nav>
</header>    
```

---

We're going to publish blog posts

We want them to use a "blog" layout

which we want to inherit from our base layout

## **5. Nested Layouts**

### **Demo**:

#### ☑️ Create blog posts

##### ./blog/post-X.md (snippet: cms-5-post-X)

```markdown
## Kittens are the best!

Especially when they are spoooooky.

![spooky kitty](/images/kitty-2.jpg)
```

...repeat 4x...

#### ☑️ Add blog layout

##### ./_includes/blog.njk (snippet: cms-5-1)

```markdown
<h1>Blog!!!</h1>

{{ content | safe }}
```

#### ☑️ Inherit from base

##### ./_includes/blog.njk

```markdown
---
layout: base.njk
---
```

---

This site looks awful!

## **6. CSS**

### **Demo**:

#### ☑️ Add CSS file

##### ./css/site.css (snippet: cms-6-0)

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

#### ☑️ Include css in layout

##### ./_includes/base.njk (snippet: cms-6-1)

```html
<html>
  <head>
    <!-- ... -->
    <link rel="stylesheet" type="text/css" href="/css/site.css" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

#### ☑️ View site: no styles!

Why? What did we have to do with static images?

#### ☑️ Pass CSS through

##### ./.eleventy.js

```javascript
module.exports = function(eleventyConfig) {
  // ...
  eleventyConfig.addPassthroughCopy("css");

  return { ... };
};
```

---

## **7. Collections**

Our blog index should show all the blog posts.

How do we show a subset of content in another page?

### **Demo**:

#### ☑️ Add tags to posts

##### ./blog/post-X.md

```yaml
---
tags: post
---
```

#### ☑️ Convert blog/index.md to blog/index.njk

So we can use nunjuck templating features to iterate the collection

##### ./blog/index.njk (snippet: cms-7-0)

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

#### ☑️ Specify order of posts

Currently, they're ordered in order of file create/update

We should be more explicit.

##### ./blog/post-X.md (snippet: cms-7-1)

```yaml
---
date: 2018-01-01T00:00:00.000Z
---
```

#### ☑️ Reverse order of posts

We want them ordered REVERSE chronologically

##### ./.eleventy.js (snippet: cms-7-2)

```javascript
module.exports = function(eleventyConfig) {
  // ...

  eleventyConfig.addCollection("postsReversed", collection => {
    return collection.getFilteredByTag("post").reverse();
  });

  return { ... };
};
```

#### ☑️ Iterate custom collection

##### ./blog/index.njk

```html
<div>
  <ul>
    {%- for post in collections.postsReversed -%}
    ...
    {%- endfor -%}
  </ul>
</div>
```

---

## **8. Netlify Admin**

This site is awesome for devs & people visiting the site!

It is not so awesome for non-technical content authors.

Let's add a "headless CMS" for them!

### **Demo**:

#### ☑️ View Netlify CMS website

https://netlifycms.org

#### ☑️ Add admin page

##### ./admin/index.html (snippet: cms-8-0)

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

#### ☑️ Configure Netlify CMS

##### ./admin/config.yml (snippet: cms-8-1)

```yaml
backend:
  name: git-gateway
  branch: mkejs
media_folder: "images/uploads"
collections:
  - name: "blog" # Used in routes, e.g., /admin/collections/blog
    label: "Blog" # Used in the UI
    folder: "blog" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
      - {label: "tags", name: "tags", widget: "hidden", default: "post"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Body", name: "body", widget: "markdown"}
```

#### ☑️ Pass `admin` folder through

##### ./.eleventy.js

```javascript
module.exports = function(eleventyConfig) {
  // ...
  addPassthroughCopy('admin');
  // ...

  return { ... };
};
```

#### ☑️ Add Netlify identity widget

##### ./admin/index.html (snippet: cms-8-2)
##### ./_includes/base.njk (snippet: cms-8-2)

```html
<head>
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head
```

#### ☑️ Configure Netlify identity

##### Open site configuration on Netlify.com

##### Select "Enable Identity"

##### Choose "Open or Invite Only"

##### Add Google provider

##### Choose "Enable Git Gateway"

##### Invite User (me)

#### ☑️ Sign into admin

##### Check email & accept invite

##### Sign in with google

#### ☑️ Make content!

#### ☑️ View Netlify build log

#### ☑️ View live site

#### ☑️ View git history

##### Pull latest

```
git pull
```

##### View history

```
git log-1
```

##### Compare changes

```
git diff HEAD HEAD~1
```

---

## **9. Thank You**

### Thank you!

#### ☑️ ./thank-you.md (snippet: cms-thank-you)

```
# THANK YOU!
## @pepopowitz
## steven.j.hicks@gmail.com
## stevenhicks.me/simplifying-content-management
```

#### ☑️ Open preview
