Gulp Example
==================

This `gulpfile.js` allows you to watch the `assets/js` directory for changes
in your javascript. When a files is saved it will run the build event.

I explicitly add javascript files to gulp.src to ensure they are loaded
in the correct order. If you're using a system like require however, the order may not matter as much and you could use a glob loader.

The javascript files are pushed through a processing pipeline

- first they are linted with jshint
- uglified
- concatenated into `./public/js/main.js`

#### Getting Started

install gulp `npm install gulp -g`
install local `npm install`

Now you can run `gulp watch` and go about your business modifying your js files.
If you add a new file to gulp.src you will need to restart `gulp watch`. This is the nice thing about the glob method it will account for all javascript files and there is really no need to restart anything.

If the build is successful you won't get any errors in the console and your html can load in `main.js` right before the closing body tag.

```html
<!-- assuming you're serving the public directory -->
<script type="text/javascript" src="/js/main.js"></script>
```

There are also tons of other awesome gulp plugins to help speed up client side javascript development. Like [live-reload][1] and [s3][2] (for uploading to a cdn).

[1]: https://www.npmjs.org/package/gulp-livereload
[2]: https://www.npmjs.org/package/gulp-s3