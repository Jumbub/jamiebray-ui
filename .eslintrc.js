const OFF = 0;
const ERROR = 2;

// A helper to build the `padding-line-between-statements` rule
const blankLineRule = type => [
  { blankLine: 'always', prev: type, next: '*' },
  { blankLine: 'always', prev: '*', next: type },
];

module.exports = {
  rules: {
    // Typescript is good at inferring return types
    '@typescript-eslint/explicit-function-return-type': OFF,
    // We can disable this because next.js ensures that react is always in scope
    'react/react-in-jsx-scope': OFF,
    // We're using typescript — we don't need propTypes
    'react/prop-types': OFF,
    // We don't need to explicitly supply display names; babel infers them
    'react/display-name': OFF,

    // Consistent order of imports
    'import/order': ERROR,
    'import/first': ERROR,
    // Enforce using named exports
    'import/no-default-export': ERROR,
    // enforce camelCase naming
    camelcase: ERROR,
    // Prevents re-assigning function arguments
    'no-param-reassign': ERROR,
    // Prefers arrow functions to function-expressions where possible
    'prefer-arrow-functions/prefer-arrow-functions': ERROR,
    // Prevents files exceeding 200 lines
    'max-lines': [ERROR, 200],
    // Sorts CSS properties alphabetically
    'better-styled-components/sort-declarations-alphabetically': ERROR,
    // Only allow console.error() calls, no console.log()
    'no-console': [ERROR, { allow: ['error'] }],
    // Warns when using a trivial class component
    'react/prefer-stateless-function': ERROR,
    // allows removing items in a destructuring expression, and prefixing unused vars with underscores
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    // Prevents using the `as` operator, which hides errors and has confusing semantics (it doesn't actually "cast" values)
    '@typescript-eslint/consistent-type-assertions': [ERROR, { assertionStyle: 'never' }],
    // Prevents using the `any` type in code. This is on by default, but only as a warning.
    '@typescript-eslint/no-explicit-any': [ERROR, { fixToUnknown: false }],
    // Prevents using a statement-based arrow function when an expression would be valid
    'arrow-body-style': ERROR,
    // Enforces the 'rules of hooks' for react
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // Requires using the `===` operator instead of `==`
    eqeqeq: 'error',
    // Disallows `<Nice ok={'something'} />` in favour of `<Nice ok="something" />`
    'react/jsx-curly-brace-presence': [ERROR, { props: 'never', children: 'never' }],
    // Enforces padding lines around multi-line statements
    'padding-line-between-statements': [
      ERROR,
      ...blankLineRule('multiline-block-like'),
      ...blankLineRule('multiline-expression'),
      ...blankLineRule('multiline-const'),
      ...blankLineRule('export'),
      // Prevents blank lines before imports. Combined with the other import ordering rules, this means they must be in a single block.
      { blankLine: 'never', prev: '*', next: 'import' },
    ],
  },
  // Relaxed rules for JS files
  overrides: [
    {
      files: ['*.js'],
      parser: 'espree',
      rules: {
        // For JS files running directly in Node, we have to use require()
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
  ],
  // We use the default rules from these presets
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  // We import rules from these packages
  plugins: [
    'prefer-arrow-functions',
    '@typescript-eslint',
    'better-styled-components',
    'react-hooks',
    'import',
  ],
  env: { node: true },
  // Lets us parse typescript files
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  // Tells eslint-plugin-react to automatically detect the version of React to use
  settings: { react: { version: 'detect' } },
};
