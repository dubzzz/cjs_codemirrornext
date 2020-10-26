const path = require("path");
const { directories } = require("./conf");

// eslint-disable-next-line
module.exports = {
  mode: "production",
  entry: Object.fromEntries(
    directories.map((dir) => [dir, `./src/${dir}/index.mjs`])
  ),
  plugins: [],
  output: {
    libraryTarget: "commonjs",
    filename: "[name]/index.js",
    // eslint-disable-next-line
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: false,
  },
};
