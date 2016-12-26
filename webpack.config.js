var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
		},{
            test: /\.js$/, loader: 'babel', exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css?sourceMap')
        }]
	}
}