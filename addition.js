const arguments = process.argv.slice(2);

arguments.forEach((element) => {
  if (~~element === 0) {
    console.log("Bitte nur Zahlen eingeben");
    process.exit();
  }
});

let sum;

if (arguments.length === 1) {
  sum = ~~arguments[0];
} else {
  sum = ~~arguments[0] + ~~arguments[1];
}

console.log(sum);
