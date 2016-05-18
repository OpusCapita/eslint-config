"use strict";

module.exports = {
  "rules": {
    // disallow deletion of variables
    // Details: http://jslinterrors.com/only-properties-should-be-deleted/
    "no-delete-var": 2,
    // disallow shadowing of names such as arguments
    // Details: http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": 2,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-unused-vars": [2, { "vars": "local", "args": "none" }],
    // disallow use of variables before they are defined
    "no-use-before-define": 2
  }
};
