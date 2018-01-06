var gulp = require('gulp');
var composer = require('gulp-uglify/composer');
var uglifyes = require('uglify-es');
var uglify = composer(uglifyes, console);
var pump = require('pump');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

var sources = [
  'search',
  'questionnaire'
];

gulp.task('build', sources.map(s => `build:${s}`));

sources.forEach(source => {
  gulp.task(`clean:${source}`, function(done) {
    pump([
      gulp.src(`public/assets/js/${source}.js`),
      clean()],
      done);
  });

  gulp.task(`build:${source}`, [`clean:${source}`], function(done) {
    var sourceExcludes = sources.join('|');
    var src = ['app/client/injector.js', `app/client/**/!(${sourceExcludes}).js`, `app/client/${source}.js`];

    pump([
      gulp.src(src),
      sourcemaps.init(),
      babel({
        presets: [['env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]]
      }),
      concat(`${source}.js`),
      uglify(),
      sourcemaps.write('.'),
      gulp.dest('public/assets/js/')],
    done);
  });
});
