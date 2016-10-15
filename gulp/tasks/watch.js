import gulp   from 'gulp';
import paths  from '../paths';

gulp.task('watch', () => {
  gulp.watch(paths.styles.all, gulp.series('styles'));
  gulp.watch(paths.assets.src, gulp.series('assets'));
});
