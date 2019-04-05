![badge-npm-version](https://img.shields.io/npm/v/eslint-config-opuscapita.svg)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-opuscapita.svg)](https://npmjs.org/package/eslint-config-opuscapita)
![badge-license](https://img.shields.io/github/license/OpusCapita/eslint-config.svg)

# OpusCapita ESLint config

## Synopsis

**This package** provides OpusCapita's base [.eslintrc](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) as an extensible shared config.

## Motivation

[ESLint](http://eslint.org/) is a tool for guarantee a **code style consistency** across developers team.
It helps to take a code more clear and readable. For example it detects an [unused variables](http://eslint.org/docs/rules/no-unused-vars). Also with linting you automatically avoid common [pit](http://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter-what-should-i-do)-[falls](http://eslint.org/docs/rules/eqeqeq)

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 2015+ and React.

**It requires:**

* [eslint](https://github.com/eslint/eslint) version >=4.14.0 or 5.
* Only for applications using Babel Transpiler: [babel-eslint](https://github.com/babel/babel-eslint) version >=8.1.2, 9, 10 or 11 (additionally requires [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core) and expects a valid Babel configuration file to exist, see [here](https://github.com/babel/babel-eslint/blob/5102c31835bdd4ec78d9f32b68a4d94a5c78678d/README.md#breaking-change-in-v11xx) for details).
* Only for React.js applications: [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) version >=7.5.1.

1. `npm install --save-dev -E eslint-config-opuscapita eslint@"^5.16.0" babel-eslint@"^10.0.1" eslint-plugin-react@"^7.12.4"`
2. add `"extends": "opuscapita"` to your .eslintrc

.eslintrc example:
```javascript
{
  "extends": "opuscapita",
  "env": {
    "jasmine": true,
    "browser": true,
    "node": true,
    "es6": true
  }
}
```

## Tips

### Rules reference

* [ECMAScript rules](http://eslint.org/docs/rules/)
* [React rules](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)

### Editor configuration

It unnecessary to run `npm run eslint` every time for error checking. Your editor able to highlight an errors on fly.
Some users prefer this way.

[How to enable ESLint in your editor](http://eslint.org/docs/user-guide/integrations)

### Automatically fixing can be applied to some rules

`npm run lint -- --fix`

## Contributors

* Kirill Volkovich kirill.volkovich@jcatalog.com
* Daniel Zhitomirsky daniel.zhitomirsky@jcatalog.com
* Alexey Sergeev alexey.sergeev@jcatalog.com

## License

**OpusCapita ESLint config** is licensed under the Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.
