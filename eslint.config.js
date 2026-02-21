import babelParser from "@babel/eslint-parser";
import vitest from "eslint-plugin-vitest";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"]
        }
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      vitest
    },
    rules: {
      // Recommended rules from plugins
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...vitest.configs.recommended.rules,

      // Overrides
      "react/prop-types": "off",          // disable prop-types enforcement
      "react/react-in-jsx-scope": "off",  // disable outdated React import requirement
      // Optional: disable alt-text rule if you don’t want it enforced
      "jsx-a11y/alt-text": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
