const gulp 				= require('gulp');
const sass 				= require('gulp-ruby-sass');
const autoprefixer 		= require('gulp-autoprefixer');
const browserSync 		= require('browser-sync').create();
const reload 			= browserSync.reload;
const rollup			= require('rollup');
const babel 			= require('rollup-plugin-babel');
const resolve 			= require('rollup-plugin-node-resolve');
const log 				= require('gulp-util');

//sass
gulp.task('sass', function () {
   sass('./src/sass/*.sass',{style:'compressed'})
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/css'));
});

//watch 
gulp.task('watch',function(){
	gulp.watch('./src/sass/**/*.sass',['sass']);
	gulp.watch('./src/js/**/*.js',['bundle']);
	gulp.watch('./public/*.html', function(){log.log(log.colors.green('HTML Updated!'))});
	gulp.watch(['./public/*.html','./public/css/*.css','./public/js/*.js'], reload);
})


//bundle
gulp.task('bundle', function(){
	return rollup.rollup({
    entry: "./src/js/main.js",
    plugins: [
      resolve(),
      babel({
      	exclude: 'node_modules/**',
      	presets: [
      		["es2015", {
      			modules: false
      		}]
      	]
      })
    ],
  })
    .then(function (bundle) {
      bundle.write({
        format: "cjs",
        moduleName: "main",
        dest: "./public/js/main.js",
        sourceMap: false
      });
    })
})

//Localhost 
gulp.task('serve',function(){
	browserSync.init({
       server: {
           baseDir: "public"
       }
   });
})




//default
gulp.task('default',['serve','watch','sass','bundle'])