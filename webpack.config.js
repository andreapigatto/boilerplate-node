const path = require('path')
const Dotenv = require('dotenv-webpack');
const WebpackShellPluginNext = require('webpack-shell-plugin-next')
// This method returns the list of dependency libraries in ‘./node_modules’ directory
// and putting the list into ‘externals’ exclude them from being bundled
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // bundling mode
  mode: process.env.NODE_ENV || 'production',

  target: 'node',

  // entry files
  entry: './src/app.ts',

  watch: process.env.NODE_ENV === 'development',

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },

  // file resolutions
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // yaml loader
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      },
    ],
  },
  devtool: false,
  // For back-end, all the dependency libraries is installed into ‘./node_modules’ with yarn install
  // or npm install during build time thus there is no need to include them in the back-end bundle
  // The front-end, on the other needs all dependencies to be bundled because the bundled javascript
  // needs to be a stand-alone unit as it will be loaded and run on the user’s browser
  externals: [nodeExternals()],
  plugins: [
    new Dotenv(),
    // After wepback has created the bundle I can run it with nodemon via script from package.json
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['npm run run:dev'],
        blocking: false,
        parallel: true,
      },
    })
  ],
}
