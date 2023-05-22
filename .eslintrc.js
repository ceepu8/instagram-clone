module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },

    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
      },
    },
  },
  plugins: ["react", "react-hooks", "simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        usePrettierrc: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react/jsx-no-useless-fragment": [
      "warn",
      {
        allowExpressions: true,
      },
    ],
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "@next/next/no-img-element": "off",
    "react/function-component-definition": "off",
    "react/no-danger": "warn",
    "no-underscore-dangle": "off",
    "no-unused-vars": "warn",
    "react/display-name": "off",
    "no-param-reassign": [
      "warn",
      {
        props: false,
      },
    ],
    "jsx-a11y/label-has-associated-control": "off",
    "import/no-anonymous-default-export": "off",
  },
};
