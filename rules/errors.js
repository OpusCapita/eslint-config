"use strict";

module.exports = {
  "rules": {
    // disallow trailing commas in object literals
    // Why? This leads to cleaner git diffs.
    // Also, transpilers like Babel will remove the additional trailing comma in the transpiled
    // code which means you don't have to worry about the trailing comma problem in legacy browsers.
    // "comma-dangle": [2, "always-multiline"],
    // disallow assignment in conditional expressions
    // BAD =>>> if(user.jobTitle = "manager")
    // GOOD =>>> if(user.jobTitle === "manager")
    "no-cond-assign": [2, "always"],
    // disallow duplicate arguments in functions
    "no-dupe-args": 2,
    // disallow duplicate keys when creating object literals
    "no-dupe-keys": 2,
    // disallow a duplicate case label.
    "no-duplicate-case": 2,
    // disallow empty statements
    "no-empty": 2,
    // disallow assigning to the exception in a catch block
    "no-ex-assign": 2,
    // disallow unnecessary semicolons
    // BAD =>>>
    // function foo() {
    //  code
    // };
    "no-extra-semi": 2,
    // disallow function or variable declarations in nested blocks
    // Details: http://eslint.org/docs/rules/no-inner-declarations
    "no-inner-declarations": [2, "functions"],
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": 2,
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": 2,
    // disallow multiple spaces in a regular expression literal
    // Details: http://jslinterrors.com/spaces-are-hard-to-count-use-a/
    "no-regex-spaces": 2,
    // disallow sparse arrays
    // Details: https://www.nczonline.net/blog/2007/09/09/inconsistent-array-literals/
    "no-sparse-arrays": 2,
    // disallow unreachable statements after a return, throw, continue, or break statement
    // function fn() {
    // x = 1;
    // return x;
    // x = 3; // this will never execute
    // }
    "no-unreachable": 2,
    // disallow comparisons with the value NaN
    "use-isnan": 2,
    // ensure JSDoc comments are valid
    // "valid-jsdoc": 2,
    // ensure that the results of typeof are compared against a valid string
    // BAD =>>>
    // typeof foo === "strnig"
    // typeof foo == "undefimed"
    "valid-typeof": 2
  }
};
