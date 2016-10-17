import gulp  from 'gulp';
import build from './build';
import watch from './watch';
import serve from './serve';

gulp.task('dev',
  gulp.series('build', gulp.parallel('serve', 'watch'))
);

