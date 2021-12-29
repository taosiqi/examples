module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['@typescript-eslint', 'prettier'], //定义了该eslint文件所依赖的插件
  extends: ['react-app', 'react-app/jest', 'prettier'], //定义文件继承的子规范
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    },
  ],
}
