import gulp         from 'gulp';
import source       from 'vinyl-source-stream';
//import uglify       from 'gulp-uglify';
import babel        from 'babelify';
import browserify   from 'browserify';
import buffer       from 'vinyl-buffer';
import paths        from '../paths';

gulp.task('scriptsCompile', () => {
    let bundler = browserify(paths.scripts.src, { debug: true }).transform(babel);
    return bundler
    .bundle()
    //.on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('build.js'))
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest(paths.scripts.build));
});
