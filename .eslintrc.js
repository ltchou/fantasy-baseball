// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:prettier/recommended' // 自動整合 prettier 與 eslint
  ],
  rules: {
    // 自訂規則，可依專案需求調整
    'vue/multi-word-component-names': 'off' // 關閉單字元元件名錯誤
  }
}
