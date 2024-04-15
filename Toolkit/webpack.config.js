const path = require("path");
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = env => ({
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
     new Dotenv({
			path: `./.env.${env.NODE_ENV}`
		}),
  ],
});