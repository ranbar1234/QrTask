// Requirements
const gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jasmine = require('gulp-jasmine'),
    babel  = require('gulp-babel'),
    minify = require('gulp-minify');

// Tasks
gulp.task('uglify', function(){
    gulp.src(['src/app/index.js'])
         // convert es6 to es5
         .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/app/js'));
});

gulp.task('minify', function(){
        gulp.src(['src/app/SitesComponent.js'])
        // convert es6 to es5
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(minify({
            ext:{
                src:'.source.js',
                min:'.min.js'
            },
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('es6to5', function(){
        gulp.src(['src/app/SitesComponent.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('runTests', () =>
    gulp.src('spec/*/*Spec.js')
        .pipe(jasmine())
);

gulp.task('watch', ()=>{
    gulp.watch('src/app/SitesComponent.js', ['es6to5'])
});

// Default task
gulp.task('default', ['runTests']);