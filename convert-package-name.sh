#!/bin/sh

find built -type f -exec sed -i -e 's/@codemirror\/next/cjs_codemirrornext/g' {} \;