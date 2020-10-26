const fs = require("fs");
const path = require("path");
const { directories } = require("./conf");

const sourceDirectoryPath = path.join(__dirname, "src");
if (!fs.existsSync(sourceDirectoryPath)) {
  fs.mkdirSync(sourceDirectoryPath);
}

for (const directoryName of directories) {
  console.log(`Build src/ for "@codemirror/next/${directoryName}"`);
  const directoryPath = path.join(sourceDirectoryPath, directoryName);
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
  }
  fs.writeFileSync(
    path.join(directoryPath, "index.mjs"),
    `export * from "@codemirror/next/${directoryName}"`
  );
}
