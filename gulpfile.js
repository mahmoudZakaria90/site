var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer')
var connect = require('gulp-connect');


//sass
gulp.task('sass', function () {
   sass('./src/sass/*.sass',{style:'expanded'})
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload())
});

//watch 
gulp.task('watch',function(){
	gulp.watch('./src/sass/**/*.sass',['sass'])
	gulp.watch('./public/*.html',['html'])
})


//html
gulp.task('html', function() {
	gulp.src('./public/*.html')
		.pipe(connect.reload());
})

//Localhost 
gulp.task('server',function(){
	connect.server({
		root: 'public',
		livereload: true
	})
})




//default
gulp.task('default',['watch','server','sass'])