import globals from "globals";
import pluginJs from "@eslint/js";
import json from "@eslint/json";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Global settings for browser environments
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Recommended JavaScript linting rules
  pluginJs.configs.recommended,
  // Add JSON plugin to support linting JSON files
  {
    plugins: {
      json,
    },
  },
  // Lint JSON files for duplicate keys using @eslint/json and disable problematic rule.
  {
    files: ["**/*.json"],
    language: "json/json",
    rules: {
      "json/no-duplicate-keys": "error",
      "no-irregular-whitespace": "off" // Disable this rule for JSON files
    },
  },
];
