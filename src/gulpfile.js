const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    scss: './scss/*.scss',
    css: './css/',
    sourcemaps: '/maps/',
};

gulp.task('sass', () =>
    gulp
        .src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(
            csso({
                restructure: false,
            })
        )
        .pipe(sourcemaps.write(paths.sourcemaps))
        .pipe(gulp.dest(paths.css))
);

gulp.task('watch-scss', () => gulp.watch(paths.scss, gulp.series('sass')));
