const rules = [
  './rules/best-practices.js',
  './rules/errors.js',
  './rules/es6.js',
  './rules/style.js',
  './rules/variables.js'
];

try {
  if (require.resolve('eslint-plugin-react') && require.resolve('react')) {
    rules.push('./rules/react.js');
  }
} catch (err) {}

module.exports = {
  extends: rules.map(require.resolve)
};
