/*const path = require('path')
const debug = process.env.NODE_ENV !== 'production'*/

module.exports = {

    devServer: {
        open: false,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: true,
        proxy: { // 配置跨域
            '/api': {
                target: 'http://219.147.7.166:9088/api/',
                ws: false,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''//这个地方的^/api的作用是吧http://219.147.7.166:9088/api/ 这个的api/替换成''空
                }
            }
        },
        before: app => { }
    }
}
