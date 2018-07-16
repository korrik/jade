var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');


gulp.task('sass', function() {
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss', // boostrap scss
        'src/assets/scss/*.scss' // app scss, add new here
    ])
        .pipe(sass())
        .pipe(gulp.dest("src/assets/css")) // compilation destination
        .pipe(browserSync.stream());
});


gulp.task('js-plugins', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js', 
        // 'node_modules/popper.js/dist/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js', 
        'node_modules/animejs/anime.min.js',
        'node_modules/typed.js/lib/typed.min.js',
    ])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest("src/assets/js"))
        .pipe(browserSync.stream());
});



gulp.task('js', function(){
    return gulp.src(['src/assets/js/app/app.js','src/assets/js/app/custom.js'])
    .pipe(uglify())
    .pipe(gulp.dest('src/assets/js'))
})


gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/assets/scss/*.scss'], ['sass']);
    gulp.watch('src/assets/js/app/app.js', ['js-watch']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['js-plugins', 'js', 'serve']);