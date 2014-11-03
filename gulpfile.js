'use strict';

var gulp    = require('gulp');
var concat  = require('gulp-concat');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify  = require('gulp-uglify');
var plumber = require('gulp-plumber');

gulp.task('watch', function(){
    // run build task everytime a js file changes
    gulp.watch('./assets/js/**/*.js', ['build']);
});

gulp.task('build', function() {

    // files will be concatenated in the order they
    // are specified in src
    gulp.src([
        './assets/js/file1.js',
        './assets/js/file2.js',
        './assets/js/file3.js'
    ])
    .pipe(plumber()) // tmp fix kill on error
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .pipe(uglify({
        // keeps variable names
        // for best compression enable it
        mangle: false
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/js'));
});