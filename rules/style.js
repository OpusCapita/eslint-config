"use strict";
// WHY? Consistency is an important part of any style guide.
// While it is a personal preference where to put the opening brace of blocks,
// it should be consistent across a whole project.
// Having an inconsistent style distracts the reader from seeing the important parts of the code.

module.exports = {
  "rules": {
    // enforce spacing inside array brackets
    "array-bracket-spacing": [2, "never"],
    // enforce one true brace style
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    // require camel case names
    "camelcase": [2, { "properties": "never" }],
    // enforce spacing before and after comma
    "comma-spacing": [2, { "before": false, "after": true }],
    // enforce one true comma style
    // var foo = ["apples"
    //  , "oranges"]; <<<= BAD COMMA PLACEMENT
    "comma-style": [2, "last"],
    // require or disallow padding inside computed properties
    "computed-property-spacing": [2, "never"],
    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": 2,
    // this option sets a specific tab width for your code
    "indent": [2, 2, { "SwitchCase": 1, "VariableDeclarator": 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    // "jsx-quotes": [2, "prefer-double"],
    // enforces spacing between keys and values in object literal properties
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    // disallow mixed "LF" and "CRLF" as linebreaks
    "linebreak-style": [2, "unix"],
    // enforces empty lines around comments
    "lines-around-comment": 0,
    // specify the maximum length of a line in your program
    "max-len": [2, 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false
    }],
    // require a capital letter for constructors
    "new-cap": [2, { "newIsCap": true, capIsNew: false }],
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 2,
    // disallow multiple empty lines
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
    // disallow use of the Object constructor
    "no-new-object": 2,
    // disallow space between function identifier and application
    "no-spaced-func": 2,
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 2,
    // require or disallow padding inside curly braces.
    "object-curly-spacing": [2, "always"],
    // enforce operators to be placed before or after line breaks
    // GOOD =>>>
    // borderTop +
    // innerHeight +
    // BAD =>>>
    //   borderTop
    // + innerHeight
    "operator-linebreak": [2, "after"],
    // enforce padding within blocks
    "padded-blocks": [2, "never"],
    // specify whether double or single quotes should be used
    // "quotes": [2, "single", "avoid-escape"],
    // enforce spacing before and after semicolons
    // BAD =>>>
    // var a = "b" ;
    // var c = "d";var e = "f";
    "semi-spacing": [2, { "before": false, "after": true }],
    // require or disallow use of semicolons instead of ASI
    // "semi": [2, "always"],
    // require a space before/after certain keywords
    // }else if (bar) <<<= BAD
    // } else if (bar) <<<= GOOD
    "keyword-spacing": [2, { "before": true, "after": true }],
    // require or disallow space before blocks
    "space-before-blocks": [2, "always"],
    // require or disallow space before function opening parenthesis
    "space-before-function-paren": [2, "never"],
    // require or disallow spaces inside parentheses
    "space-in-parens": [2, "never"],
    // require spaces around operators
    "space-infix-ops": 2,
    // require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": [2, "always", {
      "exceptions": ["-", "+"]
    }]
  }
};
