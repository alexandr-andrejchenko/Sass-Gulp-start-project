import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import paths        from '../paths';


gulp.task('serve', () => {
  browserSync.init({
    reloadOnRestart: true,
    server: './build'
  });

  browserSync.watch(`./build/**/*.*`).on('change', browserSync.reload);
});
