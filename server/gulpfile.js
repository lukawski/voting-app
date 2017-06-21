const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const flow = require('gulp-flowtype');

gulp.task('flow', () => {
  return gulp.src('src/**/*.js')
    .pipe(flow({ 
      killFlow: false,
      declarations: './flow-typed'
    }));
});

gulp.task('js', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .on('error', console.error.bind(console))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
});

gulp.task('watch', ['flow', 'js'], () => {
  gulp.watch('src/**/*.js', ['flow', 'js'])
});

gulp.task('default', ['watch']);
