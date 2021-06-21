require('ignore-styles');

require('@babel/register')({
	plugins: ['@babel/plugin-transform-runtime', 'react-hot-loader/babel'],
	presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server.js');
