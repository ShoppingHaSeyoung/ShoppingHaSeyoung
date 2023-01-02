const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false//컴포넌트 이름 2개단어조합하라는거 무시하는 설정. html이랑 안헷갈리게 하려고 만든거임.
})
