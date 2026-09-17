import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'src/components/ui', 'src/lib/utils.ts']),
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*', '../*'],
              message: 'Use the @ alias instead of relative imports.',
            },
          ],
        },
      ],

      '@typescript-eslint/no-unused-vars': 'warn',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': ['warn', { allow: ['error'] }],
      'no-undef': 'error',
      'no-extra-semi': 'error',
      'max-len': ['error', { code: 120 }],
      'object-curly-spacing': [2, 'always'],
      'arrow-parens': ['error', 'as-needed'],
      'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    },
    ignores: ['vendor', 'node_modules'],
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
