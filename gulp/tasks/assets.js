import gulp      from 'gulp';
import paths     from '../paths';

gulp.task('assets', () => {
  return gulp.src(`${paths.base.baseSrc}/assets/**`, {since: gulp.lastRun('assets')})
    .pipe(gulp.dest(paths.base.baseDist));
});
