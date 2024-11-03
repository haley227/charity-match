module.exports = {
  root: true,
  rules: {
    'no-unused-vars': [
      'warn',
      {
        vars: 'local',
        argsIgnorePattern: '^_',
      },
    ],
    'no-useless-escape': 'warn',
    'one-var': ['error', 'never'],
    'padded-blocks': [
      'warn',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'local',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@stylistic/ts/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
  },
};
