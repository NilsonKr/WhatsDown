const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/**
  @type {import('webpack').Configuration} 
*/

require('dotenv').config();

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'statics/main.[contenthash].js',
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
		new EnvironmentPlugin(['SOCKET_URL']),
		new MiniCssExtractPlugin({
			filename: 'statics/main.[contenthash].css',
		}),
		new WebpackManifestPlugin(),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				default: false,
				commons: {
					chunks: 'all',
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'commons',
					filename: 'statics/commons.[contenthash].js',
					priority: 20,
					enforce: true,
					reuseExistingChunk: true,
				},
				vendors: {
					chunks: 'all',
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					filename: 'statics/vendors.[contenthash].js',
					priority: 10,
					enforce: true,
					reuseExistingChunk: true,
				},
			},
		},
	},
};
