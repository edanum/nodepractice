"use strict";
const fs = require("fs");

const fileContent = fs.readFileSync(process.argvh[2], "utf8");
const numberOfLines = fileContent.split("\n").length - 1;
console.log(numberOfLines);
