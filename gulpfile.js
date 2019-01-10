var gulp = require("gulp");
var connect = require('gulp-connect');
gulp.task('images',function(){
	return gulp.src('img/**/*')
	.pipe(gulp.dest('nuomi/img'))
	.pipe(connect.reload());
})
gulp.task('html',function(){
	return gulp.src('*.html')
	.pipe(gulp.dest('nuomi/html'))
	.pipe(connect.reload());
})
gulp.task('css',function(){
	return gulp.src('*.css')
	.pipe(gulp.dest('nuomi/css'))
	.pipe(connect.reload());
})
gulp.task('js',function(){
	return gulp.src(['*.js','!gulpfile.js'])
	.pipe(gulp.dest('nuomi/js'))
	.pipe(connect.reload());
})
gulp.task('json',function(){
	return gulp.src(['*.json','!package.json'])
	.pipe(gulp.dest('nuomi/json'))
	.pipe(connect.reload());
})
gulp.task('php',function(){
	return gulp.src('*.php')
	.pipe(gulp.dest('nuomi/php'))
	.pipe(connect.reload());
})
gulp.task('watch',function(){
	gulp.watch('*.html',['html']);
	gulp.watch('*.css',['css']);
	gulp.watch('*.js',['js']);
	gulp.watch('img/**',['images']);
	gulp.watch('*.json',['json']);
})
gulp.task('server',function(){
	connect.server({
		root:'nuomi',
		port:8888,
		livereload:true
	});
});
gulp.task('default',['watch','server']);