const scss = require('gulp-sass')(require('sass'));
const { src, dest, watch, parallel } = require('gulp');
var concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function browsersync(){
  browserSync.init({
    server: {
        baseDir: "app"
    }
});
}


function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'expanded'}))
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}


function scripts() {
  return src([
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;

exports.default = parallel(styles, scripts, browsersync, watching);