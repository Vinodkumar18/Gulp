var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');

function sassMethod(){
    return gulp.src('app/style.scss')
       .pipe(sass())
       .pipe(cssnano())
       .pipe(gulp.dest('dist/css'));
}
const defaultTasks = gulp.parallel(sassMethod);
exports.default = defaultTasks;