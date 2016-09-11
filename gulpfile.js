'use strict';

// Зависимости проекта
const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('browser-sync');

// Компиляция SASS
gulp.task('sass', function() {
  gulp.src('sass/style.scss')
  .pipe(sass())
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
