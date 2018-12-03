const path=require('path')
const isDev=process.env.NODE_ENV==='development'
const HtmlPlugin=require('html-webpack-plugin')
const vueLoaderPlugin=require('vue-loader/lib/plugin')
const webpack=require('webpack')
const merge=require('webpack-merge')
const miniCssPlugin=require('mini-css-extract-plugin')
const baseConfig=require('./webpack.config.base.js')
const devServer={
    port:8000,
    host:'0.0.0.0',
    overlay:{
        errors:true,
    },
    hot:true
}
let config
const defaultPlugins = [
        new vueLoaderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: isDev ? '"development"' : '"production"'
          }
        }),
        new HtmlPlugin(),
    ]

if(isDev) {
  config=merge(baseConfig,{
      module:{
          rules: [
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
        ]
      },
      plugins:defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]),
      devServer
  })
}else{
    config=merge(baseConfig,{
        entry:{
            app:path.join(__dirname,'../src/index.js'),
            vendor:['vue']
        },
        output:{
            filename:'[name].[chunkhash:8].js'
        },
        module:{
            rules:[
                {
                test:/\.styl/,
                use:[
                        miniCssPlugin.loader,
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
        ]
        },
        plugins:defaultPlugins.concat([
            new miniCssPlugin({
                filename:'[name].[hash].css',
                chunkFilename:'[id].[hash].css'
            })
        ]),
        optimization:{
            splitChunks:{
                cacheGroups:{
                    commons:{
                        chunks:'initial'      
                    },
                    vendor:{
                        test:/node_modules/,
                        name:'vendor',
                        chunks:'initial'
                    }
                }
            }
        }
    })      
  }

module.exports=config