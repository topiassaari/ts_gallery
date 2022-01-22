module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
