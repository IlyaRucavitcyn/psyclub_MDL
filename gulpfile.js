var gulp = require('gulp'),
    htmlHint = require('gulp-htmlhint');
    // please check https://www.npmjs.com/package/gulp-htmlhint for docs

gulp.task('html', function() {
    return gulp.src('./index.html')
        .pipe(htmlHint())
        .pipe(htmlHint.reporter());
});
