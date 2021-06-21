const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
  @type {import('webpack').Configuration} 
*/

module.exports = {
	entry: ['./src/index.js', 'webpack-hot-middleware/client?path=http://localhost:8000/__webpack_hmr'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'statics/main.js',
		publicPath: '/',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.jpg/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'statics/main.css',
		}),
	],
};
