const assert = require("assert");
const { EditorView } = require("../dist/basic-setup");

assert.ok(typeof EditorView.theme === "function");
