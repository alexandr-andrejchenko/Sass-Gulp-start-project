import gulp      from 'gulp';
import paths     from '../paths';

gulp.task('assets', () => {
  return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.base.baseDist));
});
