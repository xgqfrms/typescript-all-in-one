module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
  },
  linterOptions: {
    exclude: ["000-xyz/**"],
  },
};
