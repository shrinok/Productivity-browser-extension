const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/Popup.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "popup.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/manifest.json", to: "manifest.json" },
        { from: "public/popup.html", to: "popup.html" },
        { from: "public/styles.css", to: "styles.css" },
        { from: "public/background.js", to: "background.js" },
        { from: "public/content.js", to: "content.js" },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
