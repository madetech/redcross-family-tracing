const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const nodemon = require('nodemon');

gulp.task('styles', () => {
    return gulp.src('src/public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/public/css/'));
});

gulp.task('assets', ()=>{
    return gulp.src('node_modules/govuk-frontend/govuk/assets/fonts/*')
        .pipe(gulp.dest('./src/assets/fonts'));
})

gulp.task('clean', () => {
    return del([
        'src/public/css/main.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('src/public/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'watch']));