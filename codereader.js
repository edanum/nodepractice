const fs = require("fs");

fs.readFile("./text.txt", "utf-8", (data, err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});
