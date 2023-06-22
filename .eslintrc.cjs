// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // Rules that can conflict with one another are turned off manually in overrides above
    'no-undef': 'off', // There is no equivalent TS rule for this, it happens automatically
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', {
        vars: 'local',
        argsIgnorePattern: '^_',
      },
    ],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'warn',

    // TS Only Rules:
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/type-annotation-spacing': ['warn'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    // Rules that apply to TS and JS without issues:
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'no-const-assign': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'no-new-object': 'error',
    'object-shorthand': [
      'warn',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'quote-props': [
      'warn',
      'consistent-as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    'no-array-constructor': 'error',
    'array-callback-return': ['error', { allowImplicit: true }],
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    'prefer-template': 'warn',
    'template-curly-spacing': 'error',
    'no-useless-escape': 'warn',
    'no-loop-func': 'error',
    'prefer-rest-params': 'warn',
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'no-param-reassign': ['warn', { props: false }],
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 8,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['warn'],
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'no-useless-constructor': 'warn',
    'no-iterator': 'warn',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'dot-notation': ['warn', { allowKeywords: true }],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'eqeqeq': ['warn', 'always', { null: 'ignore' }],
    'no-case-declarations': 'error',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'no-else-return': ['warn', { allowElseIf: false }],
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],
    'space-before-blocks': 'warn',
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    'space-infix-ops': 'warn',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-whitespace-before-property': 'error',
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
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'space-in-parens': ['warn', 'never'],
    'array-bracket-spacing': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'max-len': [
      'warn',
      140,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'block-spacing': ['warn', 'always'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'computed-property-spacing': ['warn', 'never'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'camelcase': [
      'warn',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-inner-declarations': 'off',
    'no-unreachable': 'error',

    // React specific rules:
    'react/no-unescaped-entities': ['off'],
  },
};
