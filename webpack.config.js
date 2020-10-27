const { directories } = require("./conf");

module.exports = {
  mode: "production",
  entry: Object.fromEntries(
    directories.map((dir) => [dir, `./src/${dir}/index.mjs`])
  ),
  plugins: [],
  output: {
    libraryTarget: "commonjs",
    filename: "[name]/dist/index.js",
    path: __dirname,
  },
  optimization: {
    minimize: false,
  },
};
