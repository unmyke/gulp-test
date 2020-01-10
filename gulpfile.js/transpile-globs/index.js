const { dest } = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

const getGlob = require('./get-globs');

module.exports = ({ streamCreator, glob, srcDir, dstDir }) =>
  streamCreator(getGlob(srcDir, glob), { base: srcDir })
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: srcDir }))
    .pipe(dest(dstDir));
