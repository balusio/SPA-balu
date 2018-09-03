const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
	entry :'./src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'js/main.bundle.js'

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
		},
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						// you can specify a publicPath here
						// by default it use publicPath in webpackOptions.output
						
						name:'style.css'
					  }
				},
                // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // vcompiles Sass to CSS
			]
		  }
	]
	},
	plugins: [
		new MiniCssExtractPlugin({
		  // Options similar to the same options in webpackOptions.output
		  // both options are optional
			path: path.resolve(__dirname, 'dist/'),
			filename: 'css/style.css'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot:true
	}		
}
