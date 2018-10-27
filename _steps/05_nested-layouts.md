Add blog posts
  ---
  title: Post 1
  layout: blog.njk
  ---
    ## Kittens are the best!

    Especially when they are spoooooky.

    ![spooky kitty](/images/kitty-2.jpg)
  ...
    ## Kittens are still cool. 

    Especially the sppoooooky ones.
  ...
    ## Kittens are okay.

    They are kind of spoooooking me out.
  ...
    ## Kittens are meh.

    The spooooky ones are the worst.
  ...
    ## NO MORE SPOOOOKY KITTENS

    I am shutting this blog down.


Add blog.njk
  <h1>Blog!!!</h1>

  {{ content | safe }}

Inherit from base.njk
  ---
  layout: base.njk
  ---
  