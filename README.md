# eslint-config-jcatalog

Repository (http://buildserver.jcatalog.com/git/js-eslint-config-jcatalog)

This package provides jCatalog's base JS .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, 'eslint-plugin-react' and 'babel-eslint'@6.

1. `npm install --save-dev eslint-config-jcatalog eslint-plugin-react babel-eslint@6 eslint`
2. add `"extends": "eslint-config-jcatalog"` to your .eslintrc
