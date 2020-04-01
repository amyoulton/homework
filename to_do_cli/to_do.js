const fs = require('fs')

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = "\nWelcome to ToDo CLI!\n \n-------------------\n\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit";

rl.write(menu)