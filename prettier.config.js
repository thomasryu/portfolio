module.exports = {
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  semi: false,

  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^[./]',
    '^@/(data|styles|types|utils)(/.*)?$',
    '^@/components/(.*)$',
    '^@/(documents|icons|images|videos)/(.*)$',
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
}
