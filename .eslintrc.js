export const root = true;
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module',
};
export const eslintConfig = {
  extends: ['airbnb-base'],
};
export const plugins = ['@typescript-eslint'];
export const rules = {
  'no-explicit-any': 'error',
};
