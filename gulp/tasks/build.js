import gulp            from 'gulp';
import clean           from './clean';
import styles          from './styles';
import assets          from './assets';
import scriptsCompile  from './scripts';

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('styles', 'scriptsCompile', 'assets'))
);
