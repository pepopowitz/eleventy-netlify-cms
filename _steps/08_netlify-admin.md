add admin folder
  index.html
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
    
  config.yml
    
    ```yaml
    backend:
      name: git-gateway
      branch: wip
    media_folder: "images/uploads"
    collections:
      - name: "blog" # Used in routes, e.g., /admin/collections/blog
        label: "Blog" # Used in the UI
        folder: "blog" # The path to the folder where the documents are stored
        create: true # Allow users to create new documents in this collection
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
        fields: # The fields for each document, usually in front matter
          - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
          - {label: "Title", name: "title", widget: "string"}
          - {label: "Publish Date", name: "date", widget: "datetime"}
          - {label: "Body", name: "body", widget: "markdown"}
    ```

addPassthroughCopy('admin')