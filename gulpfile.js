"use strict"

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", watch);
gulp.task("sass", sassCompila);

function sassCompila() {
  return gulp
  .src("src/assets/scss/**/*.scss")
  .pipe(
    sass(
      { outputStyle: 'compressed' }
    ).on("error", sass.logError)
  )
  .pipe(gulp.dest("src/assets/css"));
}

function watch (){
  gulp.watch("src/assets/scss/**/*.scss", sassCompila);
}