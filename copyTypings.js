const fs = require("fs");
const path = require("path");
const { directories } = require("./conf");

for (const directoryName of directories) {
  console.log(
    `Copying typings into dist/ for "@codemirror/next/${directoryName}"`
  );
  const packageNewPath = path.join(__dirname, directoryName);
  const packageOldPath = path.join(
    __dirname,
    "node_modules",
    "@codemirror",
    "next",
    directoryName
  );

  fs.writeFileSync(
    path.join(packageNewPath, "package.json"),
    String(fs.readFileSync(path.join(packageOldPath, "package.json"))).replace(
      '"type": "module"',
      '"type": "commonjs"'
    )
  );

  const packageNewTypingsPath = path.join(packageNewPath, "src");
  const packageOldTypingsPath = path.join(packageOldPath, "src");
  const files = fs.readdirSync(packageOldTypingsPath);
  files.forEach((fileName) => {
    if (!fileName.endsWith(".d.ts")) {
      return;
    }
    console.log(`> ${fileName}`);
    if (!fs.existsSync(packageNewTypingsPath)) {
      fs.mkdirSync(packageNewTypingsPath);
    }
    fs.writeFileSync(
      path.join(packageNewTypingsPath, fileName),
      String(
        fs.readFileSync(path.join(packageOldTypingsPath, fileName))
      ).replace(/from "@codemirror\/next/g, 'from "..')
    );
  });
}
