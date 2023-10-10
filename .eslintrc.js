module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest'],
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowTypedFunctionExpressions: false },
    ],
    'object-curly-spacing': ['warn', 'always'],
  },
  overrides: [
    {
      files: ['**/*.test.*', 'reportWebVitals.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
