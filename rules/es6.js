"use strict";

module.exports = {
  "env": {
    "es6": false
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "jsx": true
  },
  "rules": {
    // require space before/after arrow function's arrow
    // BAD =>>> (a)=>{}
    // GOOD =>>> (a) => {}
    "arrow-spacing": [2, { "before": true, "after": true }],
    // disallow modifying variables that are declared using const
    "no-const-assign": 2,
    // require let or const instead of var. Good idea! =)
    "no-var": 2,
    // suggest using template literals instead of strings concatenation
    // Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.
    // "prefer-template": 2
  }
};
