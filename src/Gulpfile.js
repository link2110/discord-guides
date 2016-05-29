'use strict'

// Required modules
const gulp = require('gulp')
const useref = require('gulp-useref')
const pump = require('pump')

// Default task
gulp.task('default', ['compile'])

// Compile JS and CSS
gulp.task('compile', function (cb) {
  pump([
    gulp.src('index.html'),
    useref(),
    gulp.dest('..')
  ], cb)
})
