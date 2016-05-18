"use strict";

module.exports = {
  "rules": {
    "consistent-return": 2,
    // specify curly brace conventions for all control statements
    "curly": [2, "all"],
    // require default case in switch statements
    "default-case": 2,
    // enforces consistent newlines before or after dots
    // BAD =>>>
    // var foo = object
    // .property;
    // GOOD =>>>
    // var foo = object.
    // property;
    // var bar = object.property;
    "dot-location": [2, "object"],
    // require the use of === and !==
    "eqeqeq": 2,
    // make sure for-in loops have an if statement
    // This rule is aimed at preventing unexpected behavior that could arise from using a for in loop
    // without filtering the results in the loop.
    // As such, it will warn when for in loops do not filter their results with an if statement. GOOD =>>>
    // for (key in foo) {
    // if ({}.hasOwnProperty.call(foo, key)) {
    // doSomething(key);
    // }
    // }
    "guard-for-in": 2,
    // disallow lexical declarations in case clauses. Add {} to CASE statements.
    // "no-case-declarations": 2,
    // disallow use of eval()
    "no-eval": 2,
    // disallow adding to native types
    "no-extend-native": 2,
    // disallow fallthrough of case statements
    "no-fallthrough": 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    // .5 - BAD 0.5 - GOOD
    "no-floating-decimal": 2,
    // disallow use of eval()-like methods
    "no-implied-eval": 2,
    // disallow unnecessary nested blocks
    "no-lone-blocks": 2,
    // disallow creation of functions within loops
    "no-loop-func": 2,
    // disallow use of multiple spaces
    "no-multi-spaces": 2,
    // disallow use of multiline strings
    // BAD =>>>
    // var x = "Line 1 \
    // Line 2";
    // GOOD =>>>
    // var x = "Line 1\n" +
    // "Line 2";
    "no-multi-str": 2,
    // disallow reassignments of native objects
    "no-native-reassign": 2,
    // disallow use of new operator for Function object
    "no-new-func": 2,
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": 2,
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    // GOOD =>>> \u00A9 or \xA9;
    "no-octal-escape": 2,
    // disallow use of (old style) octal literals
    // Details: http://jslinterrors.com/dont-use-octal-a-use-instead
    "no-octal": 2,
    // disallow reassignment of function parameters
    // Never mutate parameters
    // Why? Manipulating objects passed in as parameters can cause unwanted
    // variable side effects in the original caller.
    //
    // Reassigning parameters can lead to unexpected behavior,
    // especially when accessing the arguments object.
    // It can also cause optimization issues, especially in V8.
    "no-param-reassign": [2, { "props": true }],
    // disallow usage of __proto__ property
    // __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn�t be used in the code.
    // Use Object.getPrototypeOf(obj) method instead.
    "no-proto": 2,
    // disallow declaring the same variable more then once
    "no-redeclare": 2,
    // disallow use of assignment in return statement
    "no-return-assign": 2,
    // disallow use of `javascript:` urls.
    // BAD =>>> location.href = "javascript:void(0)";
    "no-script-url": 2,
    // disallow use of comma operator
    // The comma operator includes multiple expressions where only one is expected.
    // It evaluates each operand from left to right and returns the value of the last operand.
    // However, this frequently obscures side effects, and its use is often an accident.
    // Here are some examples of sequences:
    // BAD =>>> a = b += 5, a + b;
    "no-sequences": 2,
    // restrict what can be thrown as an exception
    // BAD =>>>
    // throw "error";
    // GOOD =>>>
    // throw new Error();
    "no-throw-literal": 2,
    // disallow usage of expressions in statement position
    "no-unused-expressions": 2,
    // disallow use of the with statement
    "no-with": 2,
    // require use of the second argument for parseInt()
    "radix": 2,
    // requires to declare all vars on top of their containing scope
    // By default variable declarations are always moved (�hoisted�) invisibly to the top
    // of their containing scope by the JavaScript interpreter.
    // This rule forces the programmer to represent that behaviour by manually moving
    // the variable declaration to the top of its containing scope.
    "vars-on-top": 2,
    // require immediate function invocation to be wrapped in parentheses
    // BAD =>>>
    // var x = function () { return { y: 1 };}();
    // var x = (function () { return { y: 1 };})();
    // GOOD =>>>
    // var x = (function () { return { y: 1 };}());
    "wrap-iife": [2, "outside"]
  }
};
