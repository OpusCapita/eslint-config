module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/react.js',
    './rules/style.js',
    './rules/variables.js'
  ].map(require.resolve)
};
