const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const babel = require('gulp-babel');
const { series } = require('gulp');

function taskICO(callback) {
  gulp.src('./src/ico/*')
  .pipe(gulp.dest('./dist/src/ico'))

  return callback() 

}

function moveFiles(callback) {
  gulp.src([
    './src/manifest.json',
    './src/manifest.json'
  ])
  .pipe(gulp.dest('./dist/src'))

  return callback() 

}

function taskHTML(callback) {
  gulp.src('./src/index.html')
    .pipe(htmlmin( {
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist/src'))

    return callback()
}

function taskJS(callback) {
  gulp.src('./src/js/index.js')
    .pipe(babel({
      comments: false,
      presets: ['@babel/env']
  }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/src/js'))

  return callback()
}
const process = series( taskHTML, taskJS, taskICO, moveFiles )

exports.html = taskHTML
exports.script = taskJS
exports.ico = taskICO
exports.move = moveFiles


exports.default = process