# OpusCapita ESLint config

## Synopsis

**This package** provides OpusCapita's base [.eslintrc](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) as an extensible shared config.

## Motivation

[ESLint](http://eslint.org/) is a tool for guarantee a **code style consistency** across developers team.
It helps to take a code more clear and readable. For example it detects an [unused variables](http://eslint.org/docs/rules/no-unused-vars). Also with linting you automatically avoid common [pit](http://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter-what-should-i-do)-[falls](http://eslint.org/docs/rules/eqeqeq)

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 2015+ and React.

**It requires:**

* [eslint@3.x](https://github.com/eslint/eslint)
* [eslint-plugin-react@6.x](https://github.com/yannickcr/eslint-plugin-react)
* [babel-eslint@6.x](https://github.com/babel/babel-eslint)

1. `npm install --save-dev -E eslint-config-opuscapita eslint-plugin-react@6 babel-eslint@7 eslint@3`
2. add `"extends": "opuscapita"` to your .eslintrc

.eslintrc example:
```javascript
{
  "extends": "opuscapita"
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
