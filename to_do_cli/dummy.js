// else if (answer.includes('d')) {
//     //this is the code for when 'd' is selected
//     if (answer.length === 1) {
//       console.log(
//         "\nWoops, you didn't select which one. Please try again with c followed by the number of your selection.\n"
//       );
//       return application();
//     }
//     done = answer.substring(1);
//     fs.readFile('./to_do_list.txt', 'utf8', function(err, data) {
//       if (err) {
//         console.log(
//           "\nSorry, this file doesn't exist yet! Select (n) to add an items to start a new list!\n"
//         );
//         return application();
//       }
//       if (data.includes(done) === false) {
//         console.log(
//           "\nOh no! Your list doesn't have that number. Please try again!"
//         );
//         return application();
//       }
//       arr = data.split('\n');
//       arr.forEach(element => {
//         if (element.includes(done)) {
//           index = element.indexOf;
//         }
//       });
//       arr.splice(index - 1, 1);
//       output = arr.join('\n');

//       fs.writeFile('./to_do_list.txt', output, 'utf8', function(err) {
//         if (err) {
//           console.log(
//             '\nSorry, something went wrong. Please try one more time, but double check your input!\n'
//           );
//         }
//         console.log(`Completed "${task}"`);
//         return application();
//       });
//     });
