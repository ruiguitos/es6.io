module.exports = {
  env: {
    "es6": true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
      // "airbnb",
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue', "html", "markdown"
  ],
  rules: {
    "no-console": 0,
    "no-unused-vars": 1
  }
}
