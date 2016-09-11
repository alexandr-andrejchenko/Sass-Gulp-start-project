'use strict';

// Зависимости проекта
const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('browser-sync');
const plumber = require('gulp-plumber');
const mqpacker = require('css-mqpacker');
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

// Компиляция SASS, сжатие css, префиксование
gulp.task('sass', function() {
  gulp.src('sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
        autoprefixer({browsers: [
          'last 1 version',
          'last 2 Chrome version',
          'last 2 Firefox version',
          'last 2 Opera version',
          'last 2 Edge version'
        ]}),
        mqpacker({
          sort: true
        })
      ]))
  .pipe(gulp.dest('css'))
  .pipe(minify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('css'))
  .pipe(server.reload({stream: true}));
});

// Локальный сервер, слежение
gulp.task('serv', ['sass'], function() {
  server.init({
    server: '.'
  });
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('*.html').on('change', server.reload);
});

// Оптимизация изображений
gulp.task('images', function() {
  return gulp.src('img/**/*.{png,jpg,gif}')
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true
  }))
  .pipe(gulp.dest('img'));
});
