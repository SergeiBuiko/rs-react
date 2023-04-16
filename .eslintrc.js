// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'airbnb',
//     'plugin:react-hooks/recommended',
//     'plugin:prettier/recommended',
//     'plugin:import/recommended',
//     'prettier',
//   ],
//   overrides: [],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
//   rules: {
//     'import/prefer-default-export': 'off',
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//     'comma-dangle': ['error', 'only-multiline'],
//     'react/prop-types': 'off',
//     'react/display-name': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     'prettier/prettier': ['error', { endOfLine: 'auto' }],
//     '@typescript-eslint/interface-name-prefix': 'off',
//     '@typescript-eslint/ban-ts-comment': 'error',
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-empty-function': 'off',
//     '@typescript-eslint/no-explicit-any': 'error',
//     '@typescript-eslint/no-var-reqiures': 'off',
//     'react/jsx-uses-react': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
//     'import/extensions': [
//       'error',
//       'ignorePackages',
//       {
//         js: 'never',
//         jsx: 'never',
//         ts: 'never',
//         tsx: 'never',
//       },
//     ],
//     'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
//     'jsx-a11y/label-has-associated-control': [
//       2,
//       {
//         labelComponents: ['CustomInputLabel'],
//         labelAttributes: ['label'],
//         controlComponents: ['CustomInput'],
//         depth: 3,
//       },
//     ],
//     // 'import/resolver': {
//     //   node: {
//     //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//     //   },
//     // },
//     // 'import/resolver': {
//     //   typescript: {
//     //     alwaysTryTypes: true,
//     //     project: 'path/to/folder',
//     //     project: 'packages/*/tsconfig.json',
//     //     project: ['packages/module-a/tsconfig.json', 'packages/module-b/tsconfig.json'],
//     //     project: ['packages/*/tsconfig.json', 'other-packages/*/tsconfig.json'],
//     //   },
//     // },
//   },
//   settings: {
//     react: {
//       pragma: 'React',
//       version: 'detect',
//     },
//   },
// };

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
