import gulp  from 'gulp';
import build from './build';
import watch from './watch';

gulp.task('dev', gulp.series('build', 'watch'));

