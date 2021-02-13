const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

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
}

function imgTask () {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function start () {
    copyHtml();
    style();
    watch();
    imgTask();

    gulp.watch('./src/scss/**/*.scss').on('change', style);
    gulp.watch('./src/*.html').on('change', copyHtml).on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}



exports.style = style;
exports.watch = watch;
exports.copyHtml = copyHtml;
exports.start = start;
exports.imgTask = imgTask;