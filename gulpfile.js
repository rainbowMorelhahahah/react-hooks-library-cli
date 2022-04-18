const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require('gulp-clean');


gulp.task('clean', function () {
  return gulp.src(
    'dist', { read: false, allowEmpty: true }
  ).pipe(clean('dist'))
})

gulp.task('ts', function () {
  const tsProject = ts.createProject("tsconfig.json");
  return gulp.src([
    'src/**/*.ts'
  ])
    .pipe(tsProject())
    .pipe(gulp.dest("dist"))

})

gulp.task("default", gulp.series(
  gulp.parallel('clean'),
  gulp.parallel('ts')
))