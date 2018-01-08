module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/js/bundle.js',
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },

  externals: {
    'react': 'react',
    'react-dom': 'reactdom',
    'react-redux': 'reactredux',
    'react-router': 'reactrouter',
    'react-router-dom': 'reactrouterdom'
  }
};