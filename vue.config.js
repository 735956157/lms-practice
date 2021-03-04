/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-03 13:31:45
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-03 14:02:14
 */
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path' : './',
    outputDir: 'dist',
    // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: '/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
        }
    },
}
