var gulp = require('gulp'),
    browserify = require('gulp-browserify');


// Compile scripts
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('public/js/script.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['scripts']);