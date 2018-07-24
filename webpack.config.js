const path = require('path');
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
						loader: "babel-loader"				
					}
				}

    ]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot:true
	}		
}
