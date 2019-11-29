const gulp = require("gulp");
const sass = require("gulp-ruby-sass");
const autoprefixer = require("gulp-autoprefixer");
const connect = require("gulp-connect");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const log = require("gulp-util");
const uglify = require("gulp-uglify");
const pump = require("pump");
const csso = require("gulp-csso");
const notificator = require("gulp-jshint-notify-reporter");
const babel = require("babelify");
const watchify = require("watchify");
const fs = require("fs");

//sass
gulp.task("sass", function() {
  sass("./src/sass/**/*.sass", { style: "compressed" })
    .on("error", sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest("./public/css"))
    .pipe(connect.reload());
});

//watch
gulp.task("watch", function() {
  gulp.watch("./src/sass/**/*.sass", ["sass"]);
  gulp.watch(["./src/js/**/*.js", "./src/js/*.js"], ["bundle"]);
  gulp.watch(["./*.html", "./public/js/*.js"], ["refresh"]);
});

//bundle
gulp.task("bundle", function() {
  browserify("./src/js/main.js")
    .transform("babelify", { presets: ["es2015"] })
    .bundle()
    .pipe(fs.createWriteStream("./public/js/main.js"));
});

//CSS minify
gulp.task("minify", function() {
  return gulp
    .src("./public/css/*.css")
    .pipe(csso())
    .pipe(gulp.dest("./public/css/"))
    .pipe(connect.reload());
});

//JS uglify
gulp.task("uglify", function(cb) {
  setTimeout(() => {
    pump(
      [gulp.src("./public/js/main.js"), uglify(), gulp.dest("./public/js/")],
      cb
    );
  }, 500);
});

//Refresh
gulp.task("refresh", function() {
  gulp.src("./src/js/*.js").pipe(connect.reload());
});

//Localhost
gulp.task("serve", function() {
  connect.server({
    root: "./",
    livereload: true
  });
});

//default
gulp.task("default", ["serve", "sass", "bundle", "watch"]);
