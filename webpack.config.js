
const path = require('path');
const pgk = require('./package.json');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

const externals = [
  ...Object.keys(pgk.dependencies || {})
]

module.exports = {

  entry: './src/index.ts',
  output: {
    filename: 'linkseeks-hooks.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'linkseeksHooks',
    libraryTarget: 'umd',
    globalObject: 'this',
  }
  , devtool: 'source-map'
  , mode: 'development'
  , externals: externals,
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins:[
    new TypescriptDeclarationPlugin()
  ]
}