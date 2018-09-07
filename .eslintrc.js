module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": ["error", { allow: ["warn", "error"] }]
    },
    "overrides": [
        {
            "files": ["src/index.js"],
            "rules": {
                "no-unused-vars": "off"
            }
        }
  ]
};
