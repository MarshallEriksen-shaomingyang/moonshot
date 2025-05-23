import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import youMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import jsoncPlugin from 'eslint-plugin-jsonc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['**/.next/**'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'next',
    'prettier'
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      'react-you-might-not-need-an-effect': youMightNotNeedAnEffect,
    },
    rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'react-you-might-not-need-an-effect/you-might-not-need-an-effect': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    ignores: ['**/*.json', '**/*.jsonc'],
  },
];

export default eslintConfig;