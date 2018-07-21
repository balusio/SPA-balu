const path = require('path');
module.exports ={
	entry :'./src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist/js/'),
		filename: 'main.bundle.js'

	},
	devServer: {
    	contentBase: './dist'
	},
	module: {
    rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use:{
				loader: "babel-loader"				
			}
		},
		{
		  test: /\.(jpg|png|svg)$/,
		  loader: 'file-loader',
		  options:{
		  	 outputPath:  '/img',
		  	 name: '[name].[ext]'
		  }

		}
      ]
    }
}
