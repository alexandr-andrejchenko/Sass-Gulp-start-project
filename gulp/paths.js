export default {
  base: {
    baseSrc: './src',
    baseDist: './build'
  },

  img: {
    src: './src/img/**/*.*',
    build: './build/img/**/*.{png,jpg,gif}'
  },

  styles: {
    all: './src/styles/**/*.scss',
    src: './src/styles/main.scss',
    build: './build/css'
  },

  scripts: {
    all: './src/js/**/*.*',
    src: './src/js/main.js',
    build: './build/scripts'
  },

  assets: {
    src: './src/assets/**/*.*',
    styles: './src/assets/**/*.{png,jpg}'
  }
};
