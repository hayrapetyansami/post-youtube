const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/js/index.js",
	output: {
		filename: "build.js",
		path: __dirname + "/build/js"
	},
	watch: true,
	devtool: "source-map",
	module: {}
};