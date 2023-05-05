// vue脚手架配置文件
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 开启代理服务器
  devServer: {
    proxy: "http://localhost:9999",
  },
});
