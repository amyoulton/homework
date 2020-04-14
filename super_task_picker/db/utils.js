// number of teams

function numOfTeams(members, quantity) {
  let arr = members.split(',');
  let size = arr.length / quantity;
  let output = [];
  let group = [];
  let count = quantity + 1;

  for (let i = 0; i < quantity; i++) {
    group = [];
    for (let x = 0; x < size; x++) {
      if (count > arr.length) {
        size = 1;
      }
      let y = Math.floor(Math.random() * arr.length);
      group.push(arr[y]);
      arr.splice(y, 1);
      if (arr.length === 0) {
        break;
      }
    }
    output.push(group);
    count -= 1;
  }
  return output;
}
