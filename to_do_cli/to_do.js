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
const box = '[ ]';

//variables for completing items
let done;
let arr;
let output;
let newLine = '';
let task;
let toReplace;

// variables for deleting items
let index;

const application = () => {
  rl.question(menu, answer => {
    if (answer === 'v') {
      // this is the code for when 'v' is selected
      fs.readFile('./to_do_list.txt', (err, data) => {
        if (err) {
          console.log(
            "\nSorry, this file doesn't exist yet! Select (n) to add an items to start a new list!\n"
          );
          return application();
        }
        console.log('\n' + data.toString());
        return application();
      });
    } else if (answer === 'n') {
      // this is the code for when 'n' is selected
      rl.question('\nWhat would you like to add?\n\n', answer => {
        num += 1;
        fs.appendFile(
          './to_do_list.txt',
          `${num} [ ] ${answer}\n`,
          'utf8',
          err => {
            if (err) {
              console.log(
                '\nSorry, something went wrong. Please try one more time, but double check your input!\n'
              );
              return application();
            }
            return application();
          }
        );
      });
    } else if (answer.includes('c')) {
      //this is the code for when 'c' is selected
      if (answer.length === 1) {
        console.log(
          "\nWoops, you didn't select which one. Please try again with c followed by the number of your selection.\n"
        );
        return application();
      }
      done = answer.substring(1);
      fs.readFile('./to_do_list.txt', 'utf8', function(err, data) {
        if (err) {
          console.log(
            "\nSorry, this file doesn't exist yet! Select (n) to add an items to start a new list!\n"
          );
          return application();
        }
        if (data.includes(done) === false) {
          console.log(
            "\nOh no! Your list doesn't have that number. Please try again!"
          );
          return application();
        }
        arr = data.split('\n');
        arr.forEach(element => {
          if (element.includes(done)) {
            task = element.substring(6);
            newLine = element.replace('[ ]', '[✔]');
            toReplace = element;
          }
        });
        output = data.replace(toReplace, newLine);
        fs.writeFile('./to_do_list.txt', output, 'utf8', function(err) {
          if (err) {
            console.log(
              '\nSorry, something went wrong. Please try one more time, but double check your input!\n'
            );
          }
          console.log(`\nCompleted: "${task}"`);
          return application();
        });
      });
    } else if (answer.includes('d')) {
      //this is the code for when 'd' is selected
      if (answer.length === 1) {
        console.log(
          "\nWoops, you didn't select which one. Please try again with c followed by the number of your selection.\n"
        );
        return application();
      }
      done = answer.substring(1);
      fs.readFile('./to_do_list.txt', 'utf8', function(err, data) {
        if (err) {
          console.log(
            "\nSorry, this file doesn't exist yet! Select (n) to add an items to start a new list!\n"
          );
          return application();
        }
        if (data.includes(done) === false) {
          console.log(
            "\nOh no! Your list doesn't have that number. Please try again!"
          );
          return application();
        }
        arr = data.split('\n');
        arr.forEach(element => {
          if (element.includes(done)) {
            console.log(element);
            index = arr.indexOf(element);
            task = element.substring(6);
          }
        });
        arr.splice(index, 1);
        output = arr.join('\n');

        fs.writeFile('./to_do_list.txt', output, 'utf8', function(err) {
          if (err) {
            console.log(
              '\nSorry, something went wrong. Please try one more time, but double check your input!\n'
            );
            return application();
          }
          console.log(`\nDeleted: "${task}"`);
          return application();
        });
      });
    } else if (answer === 'q') {
      // this is the code for when q is selected
      fs.unlink('./to_do_list.txt', err => {
        if (err) rl.close();
        console.log("\nWe're sad to see you go!\n");
        rl.close();
      });
    } else {
      // this is the code for when they enter an option that isn't available
      console.log("\nSorry, that's not one of our options!\n");
      return application();
    }
  });
};
rl.write(question);
rl.write(application());
