"use strict";
const gulp = require('gulp');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const watchify = require('watchify');
const persistify = require('persistify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');

function swallowError (error) {
	console.log(error.toString());
	this.emit('end');
}

function buildScss() {
	let buildStartTime = null;
	let buildEndTime = null;

	function run() {
		buildStartTime = new Date();

		let stream = gulp.src('./scss/style.scss')
		.on('error', swallowError)
		.on('end', () => {
			buildEndTime = new Date();
			gutil.log(`Building SCSS done. (Time elapsed ${buildEndTime - buildStartTime}ms.)`);
		})
		.pipe(
			sass()
			.on('error', sass.logError)
		);

		// if(isProduction) {
		// 	stream.pipe(cssnano());
		// }

		return stream.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());
	} 

	return run();
}

/*********************************************************************************************
 * 
 * 			CLI: $ gulp
 * 			Build testing resources and run browser automatically with live-reload
 * 
 *********************************************************************************************/

gulp.task('default', () => {
	gutil.log('Run React module development tasks...');
	gutil.log(`Type '$ gulp build' to generate distributable module via NPM.`);

	buildScss();

	browserSync.init({
		server: './'
	});

	gulp.watch('./index.html', browserSync.reload);
	gulp.watch('./src/**.js', browserSync.reload);
	gulp.watch('./scss/style.scss', buildScss);

	let bopts = { debug: true };
	let opts = Object.assign({}, watchify.args, bopts);

	let b = watchify(persistify(opts))
	.add('./src/test.js')
	.on('update', bundle)
	.on('log', gutil.log)
	.transform(babelify, {
		presets: ['es2015', 'react'],
		plugins: ['transform-class-properties']
	});

	function bundle() {
		return b.bundle()
		.on('error', swallowError)
		.pipe(source('test.js'))
		.pipe(gulp.dest('test'));
	}

	return bundle();
});

/*********************************************************************************************
 * 
 * 			CLI: $ gulp build
 * 			Build distributable React module. Use this before publish!
 * 
 *********************************************************************************************/

gulp.task('build', () => {
	gutil.log('Building the Component for distribute...');

	return browserify({
		entries: ['./src/index.js'],
		standalone: 'react-customizable-modal'
	})
	.transform(babelify, {
		presets: ['es2015', 'react'],
		plugins: ['transform-class-properties']
	})
	.exclude('react')
	.bundle()
	.on('error', swallowError)
	.pipe(source('index.js'))
	.pipe(gulp.dest('dist'));
});