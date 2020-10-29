const assert = require("assert");
const { EditorView } = require("./built/basic-setup");

assert.ok(typeof EditorView.theme === "function");
