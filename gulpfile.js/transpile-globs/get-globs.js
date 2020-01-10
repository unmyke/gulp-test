const { resolve } = require('path');

module.exports = (glob, srcDir) => {
  if (Array.isArray(glob) && Array.isArray(srcDir)) {
    throw new Error('Both "glob" and "srcDir" must not be Array');
  }
  if (Array.isArray(glob)) {
    return glob.map(glob => resolve(srcDir, glob));
  }

  if (Array.isArray(srcDir)) {
    return srcDir.map(srcDir => resolve(srcDir, glob));
  }

  return resolve(srcDir, glob);
};
