'use strict'

var path = require('path')
var gulp = require('gulp')
var del = require('del')
var concat = require('gulp-concat')
var wrap = require('gulp-wrap')
var replace = require('gulp-replace')
var uglify = require('gulp-uglify')

var myPath = {
	src: './src/',
	dest: './dist/',
	debug: './_debug/',
}
var fileList = [
	'./src/meta.js',
	'./src/shim.js',
	'./src/core.js',
	'./src/util.js',
	'./src/style.js',
	'./src/init.js',
]
var fileName = 'turingbook-epub-patch.user.js'

gulp.task('default', ['clean'], function () {
	gulp.start('js')
})

gulp.task('clean', function () {
	del(path.join(myPath.dest, '*.*'))
})

gulp.task('watch', ['dev'], function () {
	gulp.watch([
		path.join(myPath.src, '**/*.*'),
		//'gulpfile.js',
		'*.json',
	], ['dev'])
})

gulp.task('dev', function () {
	gulp.src(fileList)
		.pipe(concat(fileName))
		.pipe(gulp.dest(myPath.debug))
})

gulp.task('js', function() {
	gulp.src(fileList)
		.pipe(concat(fileName))
		.pipe(replace(/\/\*\* DEBUG_INFO_START \*\*\//g, '/*'))
		.pipe(replace(/\/\*\* DEBUG_INFO_END \*\*\//g, '*/'))
		//.pipe(uglify({
		//	preserveComments: 'some'
		//}))
		.pipe(gulp.dest(myPath.dest))
})
