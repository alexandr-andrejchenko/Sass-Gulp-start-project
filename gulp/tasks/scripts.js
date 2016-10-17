import gulp         from 'gulp';
import source       from 'vinyl-source-stream';
import babel        from 'babelify';
import browserify   from 'browserify';
import paths        from '../paths';

gulp.task('scriptsCompile', () => {
    let bundler = browserify(paths.scripts.src, { debug: true }).transform(babel);
    return bundler
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest(paths.scripts.build));
});
