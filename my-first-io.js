"use strict";
const fs = require("fs");

const fileContent = fs.readFileSync(process.argv[2]);
const numberOfLines = fileContent.toString().split("\n").length - 1;
console.log(numberOfLines);
