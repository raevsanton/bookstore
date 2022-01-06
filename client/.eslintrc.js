module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
  },
  rules: {
    'max-len': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/camelcase': 0,
    'react/no-danger': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-fragments': 0,
    'no-unused-expressions': [2, { allowTernary: true }],
    '@typescript-eslint/no-use-before-define': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
