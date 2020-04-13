// number of groups

let members =
  'batman, robin, harley, joker, penguin, riddler, catwoman, poison ivy';
let quantity = 4;

let arr = members.split(',');
let size = arr.length / quantity;
let output = [];
let group = [];

for (let i = 0; i < quantity; i++) {
  group = [];
  for (let x = 0; x < size; x++) {
    let y = Math.floor(Math.random() * arr.length);
    group.push(arr[y]);
    arr.splice(y, 1);
    if (arr.length === 0) {
      break;
    }
  }
  output.push(group);
}

console.log(output);
