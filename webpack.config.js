const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
	entry :'./src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist/js/'),
		filename: 'main.bundle.js'

	},
	watch: true,
	mode: "development", 
	module: {
    rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use:{
				loader: "babel-loader",
				query: {
					presets: ['es2015']
				}			
			}	
		}]
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot:true
	}		
}
