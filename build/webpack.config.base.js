const path=require('path')

const config = {
    target: 'web',
    entry: path.join(__dirname,'../src/index.js'),
    output: {
        filename: 'build[hash:8].js',
        path: path.join(__dirname,'../dist')
    },
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
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}

module.exports=config