var webpack = require('webpack');

module.exports = {
	entry : ['./src/entry.js'],
	output : {
		path : __dirname,
		filename : 'bundle.js' 
	},
	module : {
		loaders : [{
			test : /\.vue$/,
			loader : 'babel?{"presets":["es2015"]}!vue',
			exclude : /node_modules/
		}]
	}
}