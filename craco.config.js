const path = require('path')

module.exports = {
    // webpack配置
    webpack: {
        // 配置别名
        alias: {
            // 约定使用@表示src文件所在路径
            // 在package.json里scripts-start/build 为carco
            '@': path.resolve(__dirname, 'src')
        }
    }
}