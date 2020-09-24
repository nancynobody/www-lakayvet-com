/*
* Description: Used to build project and optimize for PROD environment
*/

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Optimize and minify images
gulp.task('minify-img', () => {
  gulp.src('public/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/dist/img'));
});

// Minify compiled CSS
gulp.task('minify-css', () => {
  gulp.src('public/stylesheets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/dist/stylesheets'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

// Minify JS
gulp.task('minify-js', () => {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    // .pipe(header(banner, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/dist/js'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

// Run everything
gulp.task('default', ['minify-css', 'minify-js', 'minify-img']);
