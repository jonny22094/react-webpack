module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:react/recommended',
        "plugin:flowtype/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-double"]
    },
    "settings": {
        "flowtype": {
          "onlyFilesWithFlowAnnotation": true
        }
    }
};