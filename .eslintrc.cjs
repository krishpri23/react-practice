module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": "off",
  },
};
