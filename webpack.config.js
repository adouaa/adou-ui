const path = require('path');

module.exports = {
  // 编译的输入位置，如果你使用TypeScript编写，应该是在项目目录下的src目录下的index.tsx
  entry: './src/index.js',
  // 编译的输出设置
  output: {
    // 编译后的入口文件，一般是index.js
    filename: 'index.js',
    // 编译后的文件将被输出到哪个文件夹下，这里是当前项目目录下的build文件夹内
    path: path.resolve(__dirname, 'build'),
    // 输出的模块类型为commonjs2，适用于React组件的打包
    libraryTarget: 'commonjs2'
  },
  module: {
    // 在编译过程中遇到的不同类型的文件，需要使用不同的loader来处理
    rules: [
      {
        // 编译时找.ts或.tsx的文件
        test: /\.tsx?$/,
        // 不包含这些文件夹，例如node_modules和build文件夹
        exclude: /(node_modules|build)/,
        // 使用ts-loader来处理TypeScript文件
        use: 'ts-loader'
      },
      {
        // 遇到css文件的时候
        test: /\.css$/,
        // 使用style-loader和css-loader处理
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  // 要排除哪些模块不打包呢？这里排除了react，因为我们假设它已经被外部环境加载
  externals: {
    'react': 'commonjs react'
  },
  // 解析文件时自动解析的扩展名，包括.ts和.tsx
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
};
