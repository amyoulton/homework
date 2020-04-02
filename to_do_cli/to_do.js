const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// variables for the menu
const question = '\nWelcome to ToDo CLI!\n \n-------------------\n';
const menu =
  '\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n\n';

//variables for creating new items
let num = 0;
const box = '☐';
const checkBox = '☑';

//variables for completing items
let done;
let array = [];
let line = '';

const application = () => {
  rl.question(menu, answer => {
    if (answer === 'v') {
      fs.readFile('./to_do_list.txt', (err, data) => {
        if (err) throw err;
        console.log('\n' + data.toString());
        return application();
      });
    } else if (answer === 'n') {
      rl.question('\nWhat would you like to add?\n\n', answer => {
        num += 1;
        fs.appendFile(
          './to_do_list.txt',
          `${num} ${box} ${answer}\n\n`,
          'utf8',
          err => {
            if (err) throw err;
            return application();
          }
        );
      });
    } else if (answer.includes('c')) {
      done = answer.substring(1);
      fs.readFile('./to_do_list.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        arr = data.split('\n');
        arr.forEach();
        console.log(arr);
        // fs.writeFile(someFile, result, 'utf8', function(err) {
        //   if (err) return console.log(err);
        // });
      });
    }
  });
};

rl.write(question);
rl.write(application());
