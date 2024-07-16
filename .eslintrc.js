module.exports = {
  root: true,
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "react-native/react-native": true
  },
  "plugins": ["react", "react-native"],
  "extends": ["eslint:recommended", "plugin:react/recommended", "prettier", '@react-native-community'],
  "rules": {
    "react/prop-types": 0,
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    // "react-native/sort-styles": [
    //     "warn",
    //     "asc",
    //     {
    //         "ignoreClassNames": false,
    //         "ignoreStyleProperties": false
    //     }
    // ],
    "no-console": 1,
    "no-lonely-if": 1,
    "no-unused-vars": 1,
    "no-trailing-spaces": 1,
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": 1,
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": [1, "always"],
    "indent": ["warn", 4, { "SwitchCase": 1 }],

    // "semi": [1, "never"],
    "quotes": ["error", "single"],
    "array-bracket-spacing": 1,
    "linebreak-style": 0,
    "no-unexpected-multiline": "warn",
    "keyword-spacing": 1,
    "comma-dangle": 1,
    "comma-spacing": 1,
    "arrow-spacing": 1
  }
};
