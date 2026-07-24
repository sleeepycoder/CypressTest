import globals from 'globals';
import eslintPluginCypress from 'eslint-plugin-cypress';

export default [
  {
    files: ['cypress/**/*.js'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      cypress: eslintPluginCypress,
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'error',
      'cypress/no-force': 'warn',
      'cypress/no-assigning-return-values': 'error',
    },
  },
];
