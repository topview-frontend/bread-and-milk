var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('jade', function() {
	return gulp.src('src/templates/**/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('build/development'));	
})

gulp.task('serve', ['jade', 'watch'], function() {
	 browserSync.init({
        server: "./build/development"
    });
	 gulp.watch("build/development/*.html").on('change', reload);
})

gulp.task('jade-watch', function() {
	gulp.watch('src/templates/**/*.jade', ['jade'])
})

gulp.task('default', ['serve'], function() {
	console.log('I am watching.')
})