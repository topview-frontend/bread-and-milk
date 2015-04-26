var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('sass/main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './'
  });
  gulp.watch('sass/**/*.scss', ['sass']);

  gulp.watch('*.html').on('change', reload);
  gulp.watch('css/*.css').on('change', reload);
});

gulp.task('default', ['serve']);
