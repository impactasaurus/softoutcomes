var gulp = require('gulp');
var composer = require('gulp-uglify/composer');
var uglifyes = require('uglify-es');
var uglify = composer(uglifyes, console);
var pump = require('pump');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('build', ['build:search']);

gulp.task('clean:search', function(done) {
  pump([
    gulp.src('public/assets/js/search.js'),
    clean()],
    done);
});

gulp.task('build:search', ['clean:search'], function(done) {
  var src = ['app/client/injector.js', 'app/client/**/!(search).js', 'app/client/search.js'];

  pump([
    gulp.src(src),
    concat('search.js'),
    uglify(),
    gulp.dest('public/assets/js/')],
    done);
});
