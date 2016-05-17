# eslint-config-jcatalog

Repository (http://buildserver.jcatalog.com/git/js-eslint-config-jcatalog)

This package provides jCatalog's base JS .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-jcatalog eslint-plugin-import eslint`
2. add `"extends": "airbnb-base"` to your .eslintrc