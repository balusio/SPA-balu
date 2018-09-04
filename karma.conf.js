
module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		browsers: ['Chrome'],
		files: [
			'spec/*.spec.js',
		],
		exclude: ['node_modules/*.spec.js'],
		client: {
			clearContext: false    // will show the results in browser once all the testcases are loaded
		},
    	plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-webpack',
			'karma-coverage',
			'karma-babel-preprocessor',
			'karma-jasmine-html'
		],
		webpack: {},
		webpackServer: {
			noInfo: true
		},

		autoWatch: true,
		reporters: ['html', 'progress', 'coverage'],
		preprocessors: {
			'spec/*.spec.js': ['webpack','coverage']
		},
	});
};