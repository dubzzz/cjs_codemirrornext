const fs = require("fs");
const path = require("path");
const { directories } = require("./conf");

const distDirectoryPath = path.join(__dirname, "dist");
for (const directoryName of directories) {
  console.log(
    `Copying typings into dist/ for "@codemirror/next/${directoryName}"`
  );
  const directoryPath = path.join(distDirectoryPath, directoryName);
  const nodeModulesPath = path.join(
    __dirname,
    "node_modules",
    "@codemirror",
    "next",
    directoryName,
    "dist"
  );

  const files = fs.readdirSync(nodeModulesPath);
  files.forEach((fileName) => {
    if (!fileName.endsWith(".d.ts")) {
      return;
    }
    console.log(`> ${fileName}`);
    fs.writeFileSync(
      path.join(directoryPath, fileName),
      String(fs.readFileSync(path.join(nodeModulesPath, fileName))).replace(
        /from "@codemirror\/next/g,
        'from "cjs_codemirrornext'
      )
    );
  });
}
