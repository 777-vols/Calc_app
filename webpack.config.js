const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	target: "web",
	devtool: "source-map",
	entry: ["@babel/polyfill", "./src/index.jsx"],
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].[hash].js",
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true
	},
	resolve: {
		extensions: [".jsx", ".js", ".scss"],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin(),
		new HtmlWebpackPlugin({
			title: "Calc_app",
			template: "./public/index.html",
			favicon: "./public/favicon.png"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|svg)/,
				use: ["file-loader"]
			},
		]
	}
};
