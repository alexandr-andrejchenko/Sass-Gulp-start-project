import gulp       from 'gulp';
import imagemin   from 'gulp-imagemin';
import paths      from '../paths';

gulp.task('imagemin', () => {
  return gulp.src(paths.img.build)
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3})
    ]))
    .pipe(gulp.dest(`${paths.base.baseDir}/img`));
});
