const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvPlugin = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

require('dotenv').config();

/**
  @type {import('webpack').Configuration} 
*/

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'statics/main.js',
		publicPath: '/',
		assetModuleFilename: '../assets/[name].[ext]',
	},
	mode: 'production',
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
				use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|svg|png)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new DotenvPlugin(),
		new MiniCssExtractPlugin({
			filename: 'statics/main.css',
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
	},
};
