var gulp = require('gulp'),
    htmlHint = require('gulp-htmlhint'),
    csslint = require('gulp-csslint'),
    watch = require('gulp-watch');

gulp.task('htmllint', function() {
    return gulp.src('./index.html')
        .pipe(htmlHint())
        .pipe(htmlHint.reporter());
});

gulp.task('csslint', function() {
  gulp.src('./css/main.css')
    .pipe(csslint({
      'box-sizing':false,
      'adjoining-classes':false,
      'box-model':false,
      'universal-selector':false,
      'regex-selectors':false
    }))
    .pipe(csslint.reporter());
});

gulp.task('watch', function(){
  gulp.watch(['./index.html','./css/main.css'],['htmllint','csslint'])
});

gulp.task('default',['htmllint','csslint','watch']);
