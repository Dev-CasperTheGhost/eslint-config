"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "error",
    "react/no-typos": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-closing-bracket-location": "error",
    "react/no-string-refs": "error",
    "react/self-closing-comp": "error",
    "react/prefer-stateless-function": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
    "react/forbid-foreign-prop-types": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
    "react/no-render-return-value": "error",
    "react/no-unsafe": "error",

    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};