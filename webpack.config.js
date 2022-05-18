// React를 변환하기위한 Webpack 구성 파일
const path = require( 'path' )
const webpack = require( 'webpack' )
// 변환 대상에서 제외하는 모듈 --- (※1)
const externalPlugins = new webpack.ExternalsPlugin( 'commonjs' , [
  'app' ,
  'auto-updater' ,
  'browser-window' ,
  'content-tracing' ,
  'dialog' ,
  'global-shortcut' ,
  'native-image' , 
  'menu' ,
  'menu-item' ,
  'power-monitor' ,
  'protocol' ,
  'tray' ,
  'remote' ,
  'web-frame' ,
  'clipboard' ,
  'crash-reporter' ,
  'screen' ,
  'shell'
] )
module.exports= {
  entry: {
    index: path.join(__dirname, 'src' , 'index.js' )
  } ,
  output: {
    path: path.join(__dirname, 'dist' ),
    filename: '[name].js'
  } ,
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map' , //원래 소스 코드와 연결한다. babel로 트랜스파일 해도, 원래의 코드로 브레이크를 칠 수 있다
  target: 'node' ,
  module: {
    rules: [
      {
        test: /.js$/ ,
        loader: 'babel-loader' ,
        options: {
          presets: [ 'es2015' , 'react' ]
        }
      } ,
      { test: /\.css$/ ,
        loaders: [ 'style-loader' , 'css-loader' ]
      }
    ]
  } ,
  plugins: [externalPlugins]
}