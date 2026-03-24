import js from "@eslint/js"
import ts from "typescript-eslint"
import svelte from "eslint-plugin-svelte"
import prettier from "eslint-config-prettier"
import globals from "globals"
import svelteConfig from "./svelte.config.js"

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
    rules: {
      // TS handles this; ESLint's version causes false positives with TS
      // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      "no-undef": "off",
      // New in eslint-plugin-svelte v3; requires resolve() wrapper on all hrefs.
      // Existing codebase uses plain href strings throughout; not adopting yet.
      "svelte/no-navigation-without-resolve": "off",
      // New in eslint-plugin-svelte v3; requires keys on each blocks.
      // Existing codebase omits keys where identity tracking isn't needed.
      "svelte/require-each-key": "off",
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  {
    // shadcn-svelte UI components use ...restProps with $props() to forward
    // arbitrary HTML attributes. This triggers custom_element_props_identifier
    // which is irrelevant since these aren't custom elements.
    files: ["src/lib/components/ui/**/*.svelte"],
    rules: {
      "svelte/valid-compile": ["error", { ignoreWarnings: true }],
    },
  },
  {
    // Proper type checking in tests with mocks can be tedious and counterproductive.
    files: ["**/*.test.ts", "**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    ignores: [
      ".svelte-kit/",
      "build/",
      "node_modules/",
      "package/",
      "supabase/",
      ".claude/",
      ".env",
      ".env.*",
      "!.env.example",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
    ],
  },
]
