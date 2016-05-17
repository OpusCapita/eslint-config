module.exports = {
  extends: [
    './rules.js'
  ].map(require.resolve),
  env: {
    mocha: true,
    node: false
  },
  parser: "babel-eslint",
  plugins: [
    "react"
   ],
  ecmaFeatures: {
    jsx: true
  }
};
