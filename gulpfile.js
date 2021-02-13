const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function copyHtml () {
    return gulp.src('./src/*.html').pipe(gulp.dest('./dist'));
}

function style () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html', copyHtml).on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}



exports.style = style;
exports.watch = watch;
exports.copyHtml = copyHtml;