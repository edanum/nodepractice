"use strict";
const fs = require("fs");
file = process.argv[2];

fs.readFile(file, (err, data) => {
  if (err) {
    return console.log(err);
  }
  const numberOfLines = data.toString().split("\n").length - 1;
  console.log(numberOfLines);
});
