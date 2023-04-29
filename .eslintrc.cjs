module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin", "prettier", "import"],
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: "latest"
  },
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.cjs", "jest.config.ts"],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "no-console": "off"
  }
};
