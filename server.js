'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {colors: true}
}).listen(3001, (error)=>{
    if(error){
        return error
    }
    console.log('listening on 3001...')
});