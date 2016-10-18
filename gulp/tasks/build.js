import gulp            from 'gulp';
import clean           from './clean';
import styles          from './styles';
import assets          from './assets';
import scriptsCompile  from './scripts';
import imagemin        from './img';

gulp.task('build', gulp.series(
  'clean',
  'assets',
  gulp.parallel('styles', 'scriptsCompile', 'imagemin'))
);
