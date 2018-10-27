Problem: need shared meta & a header

 _includes/base.njk
    ```  
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

index.md
  ---
  layout: base.njk
  ---

refresh: html is html-encoded

_includes/base.njk
  {{ content | safe }}

Add title
  _includes/base.njk
    <title>...{{ title }}</title>
  
  Content pages
    title: XXXX

Add header
  _includes/base.njk
    ```
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </nav>
    </header>    
    ```
    