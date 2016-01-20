var config = require('./config'),
    gulp = require('gulp'),
    annotate = require('gulp-ng-annotate'),
    beautify = require('gulp-beautify'),
    replace = require('gulp-replace'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    wrapper = require('gulp-wrapper'),
    del = require('del');

gulp.task('default', ['build']);

gulp.task('clean', function() {
    return del('./dist');
});

gulp.task('compile', ['clean'], function() {
    return gulp
        .src(config.source + config.generated)
        .pipe(replace('/* INSERT FUNCTION DECLARATIONS HERE */', config.func_list))
        .pipe(replace('/* INSERT FUNCTIONS HERE */', config.file_group))
        .pipe(replace('/* INSERT FUNCTION MAKEAPICALL HERE */', config.makeApiCall_file))
        .pipe(annotate())
        .pipe(wrapper({header: config.wrap.header, footer: config.wrap.footer}))
        .pipe(beautify({indentSize: 4}))
        .pipe(concat(config.sdk_name + '.js'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('build', ['compile'], function() {
    return gulp
        .src(config.dist + config.sdk_name + '.js')
        .pipe(uglify())
        .pipe(concat(config.sdk_name + '.min.js'))
        .pipe(gulp.dest(config.dist));
});

