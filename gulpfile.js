var gulp = require('gulp'),
    htmlHint = require('gulp-htmlhint'),
    // please check https://www.npmjs.com/package/gulp-htmlhint for docs
    csslint = require('gulp-csslint');
    // please check https://www.npmjs.com/package/gulp-csslint for docs

gulp.task('htmllint', function() {
    return gulp.src('./index.html')
        .pipe(htmlHint())
        .pipe(htmlHint.reporter());
});

gulp.task('csslint', function() {
  gulp.src('./css/*.css')
    .pipe(csslint({
      'box-sizing':false,
      'adjoining-classes':false,
      'important':false
    }))
    .pipe(csslint.reporter());
});
