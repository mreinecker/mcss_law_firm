var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('css', function () {
    var postcss    = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('src/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([require('autoprefixer') ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('dest/') );
});
