var gulp = require('gulp');
var concat = require('gulp-concat');


var paths = {
  jsSource: ['./js/**/*.js'],
  cssSource: ['./css/**/*.css']
}

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public'))
})

gulp.task('css', function() {
  return gulp.src(paths.cssSource)
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.cssSource, ['css']);
})

gulp.task('default', ['watch', 'js', 'css'])
