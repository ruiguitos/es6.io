module.exports = {
  env: {
    es6: true,
    browser: true,
    jquery: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb',
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue', 'html', 'markdown', 'react'
  ],
  rules: {
    'no-console': 0,
    'no-unused-vars': 0
    // "no-unused-vars":[1, {"argIgnorePattern": "res|next|^err"}],
    // "arrow-body-style": [2, "as-needed"],
    // "no-param-reassign": [2, {"props": false}],
    // "no-console": 0,
    // "import": 0,
    // "func-names": 0,
    // "space-before-function-paren": 0,
    // "comma-dangle": 0,
    // "max-len": 0,
    // "no-underscore-dangle": 0,
    // "consistent-return": 0,
    // "react/prefer-es6-class": 0,
    // "radix": 0
  }
}
