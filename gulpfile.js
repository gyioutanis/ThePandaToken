const gulp = require('gulp')
const sass = require('gulp-sass')
const phpConnect = require('gulp-connect-php')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')
// const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

function connectSync() {
  phpConnect.server(
    {
      port: 5000,
      keepalive: true,
      base: '.',
    },
    function () {
      browserSync({
        proxy: '127.0.0.1:5000',
      })
    },
  )
}

function browserSyncReload(done) {
  browserSync.reload()
  done()
}

function watchFiles() {
  gulp.watch('./**/*.php', browserSyncReload)
  gulp.watch('assets/css/src/**', scss)
  gulp.watch('assets/css/vendor/**', css)
}

function scss() {
  return (
    gulp
      .src('assets/css/src/*.sass')
      .pipe(sass())
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      // .pipe(cleanCSS())
      // .pipe(rename('style.min.css'))
      .pipe(gulp.dest('assets/css/dist'))
      .pipe(browserSync.stream())
  )
}

function css() {
  return gulp
    .src('assets/css/vendor/**/*.css')
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('assets/css/dist'))
    .pipe(browserSync.stream())
}

const watch = gulp.parallel([watchFiles, connectSync])

exports.scss = scss
exports.css = css
exports.default = watch
