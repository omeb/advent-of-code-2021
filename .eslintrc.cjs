module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "no-plusplus": "off",
    "implicit-arrow-linebreak": "off",
    "comma-dangle": "off",
    quotes: "off",
  },
};
