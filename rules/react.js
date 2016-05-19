"use strict";

module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "0.14"
    }
  },
  "ecmaFeatures": {
    "jsx": false
  },
  "rules": {
    // Enforce boolean attributes notation in JSX
    // <Hello personal />; <<<= BAD
    // <Hello personal={true} />; <<<= GOOD
    "react/jsx-boolean-value": [2, "always"],
    // Validate closing bracket location in JSX
    // BAD =>>>
    // <Hello
    //   firstName="John"
    //   lastName="Smith"
    //   />;
    // GOOD =>>>
    // <Hello
    //   firstName="John"
    //   lastName="Smith"
    // />;
    "react/jsx-closing-bracket-location": [2, "line-aligned"],
    // Enforce event handler naming conventions in JSX
    // Ensures that any component or prop methods used to handle events are correctly prefixed.
    "react/jsx-handler-names": [1, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],
    // Validate props indentation in JSX
    // BAD =>>>
    // <Hello
    // firstName="John"
    // />
    // GOOD =>>>
    // <Hello
    //   firstName="John"
    // />
    "react/jsx-indent-props": [2, 2],
    // Validate JSX has key prop when in array or iterator
    "react/jsx-key": 2,
    // Prevent usage of isMounted
    "react/no-is-mounted": 2,
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef": 2,
    // Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": 2,
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    // Since 0.17.0 the ESLint no-unused-vars rule does not detect variables used in JSX (see details).
    // This rule will find variables used in JSX and mark them as used.
    "react/jsx-uses-vars": 2,
    // Prevent usage of deprecated methods
    "react/no-deprecated": [2, { "react": "0.14.0" }],
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": [2, "allow-in-func"],
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": 2,
    // Prevent multiple component definition per file
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": [2, "always"],
    // Prevent missing props validation in a React component definition
    "react/prop-types": [2, { "ignore": [
      "children",
      "location",
      "routeParams",
      "dispatch",
      "route"], "customValidators": [] }],
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope": 2,
    // Prevent extra closing tags for components without children
    "react/self-closing-comp": 2,
    // Enforce component methods order
    "react/sort-comp": [2, {
      "order": [
        "lifecycle",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }],
    // Prevent missing parentheses around multilines JSX
    "react/wrap-multilines": [2, {
      declaration: true,
      assignment: true,
      return: true
    }]
  }
};
