import gulp          from 'gulp';
import sourcemaps    from 'gulp-sourcemaps';
import gulpIf        from 'gulp-if';
import sass          from 'gulp-sass';
import mqpacker      from 'css-mqpacker';
//import plumber       from 'gulp-plumber';
import postcss       from 'gulp-postcss';
import autoprefixer  from 'gulp-autoprefixer';
import rename        from 'gulp-rename';
import minifyCss     from 'gulp-csso';
import paths         from '../paths';

// Запуск `NODE_ENV=production gulp [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Компиляция SASS, сжатие css, префиксование
gulp.task('styles', () => {

  return gulp.src(paths.styles.src)
  .pipe(gulpIf(isDev, sourcemaps.init()))
  //.pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({
      browsers: [
        'last 1 version',
        'last 3 Chrome version',
        'last 3 Firefox version',
        'last 3 Opera version',
        'last 3 Edge version'
      ]
    }))
  .pipe(postcss([
      mqpacker({
        sort: true
      })
    ]))
  .pipe(minifyCss())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulpIf(isDev, sourcemaps.write()))
  .pipe(gulp.dest(paths.styles.build))
});
