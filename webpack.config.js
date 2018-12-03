const path=require('path')
const isDev=process.env.NODE_ENV==='development'
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin=require('html-webpack-plugin')
const webpack=require('webpack')
const extractPlugin=require('extract-text-webpack-plugin')

const config = {
    target: 'web',
    entry: path.join(__dirname,'src/index.js'),
    output: {
        filename: 'build[hash:8].js',
        path: path.join(__dirname,'dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: isDev ? '"development"' : '"production"'
          }
        }),
        new HtmlPlugin()
    ],
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
        ]
    }
}

if(isDev) {
  config.module.rules.push(
      {
        test: /\.styl/,
        use:[
            'style-loader',
            'css-loader',
            {
                loader:'postcss-loader',
                options:{
                    sourceMap:true,
                }
            },
            'stylus-loader'
        ]
      }
  )
  config.devServer={
    port:8000,
    host:'0.0.0.0',
    overlay:{
        errors:true,
    },
    hot:true
}
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
  }else{
      config.entry={
          app:path.join(__dirname,'src/index.js'),
          vendor:['vue']
      }
      config.output.filename='[name].[chunkhash:8].js'
      config.module.rules.push(
          {
              test:/\.styl/,
              use:extractPlugin.extract({
                  fallback:'style-loader',
                  use:[
                      'css-loader',
                      {
                          loader:'postcss-loader',
                          options:{
                              sourceMap:true,
                          }
                      },
                      'stylus-loader'
                  ]
              })
          }
      )
      config.plugins.push(
          new extractPlugin('styles.[contentHash:8].css'),
          new webpack.optimize.CommonsChunkPlugin({
              name:'vendor'
          }),
          new webpack.optimize.CommonsChunkPlugin({
              name:'runtime'
          })
      )
  }


module.exports=config