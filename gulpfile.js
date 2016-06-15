var gulp = require('gulp')
var babel = require('gulp-babel')
var gulpFilter = require('gulp-filter')
var del = require('del')

gulp.task('default', ['build'])

gulp.task('build', ['clean'], function() {
    var f = gulpFilter(['**/*.js'], { restore: true })
    return gulp.src('src/**/*')
        .pipe(f)
        .pipe(babel())
        .pipe(f.restore)
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function() {
    return del('dist')
})
