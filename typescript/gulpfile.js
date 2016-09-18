var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    tslint = require('gulp-tslint'),
    stylish = require('gulp-tslint-stylish');

var projectFiles = [
    "bootstrap.ts",
    "lib/*.ts",
    "lib/**/**.ts"
];
gulp.task("default", ["watch"]);

gulp.task('watch', () => {
    gulp.watch(projectFiles, ["lint"]);
});

gulp.task('lint', () => {
    gulp.src(projectFiles)
        .pipe(tslint())
        .pipe(tslint.report(stylish, {
            emitError: false,
            sort: true,
            bell: true,
            summarizeFailureOutput: true
        })
        .on('error', () => {/*noOp*/}));
})