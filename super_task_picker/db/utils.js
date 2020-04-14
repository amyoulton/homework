// number of teams

const utils = {
  numOfTeams(member, num) {
    let quantity = parseInt(num);
    let arr = member.split(',');
    let size = arr.length / quantity;
    let result = [];
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
      result.push(group);
      count -= 1;
    }
    return result;
  },

  numPerTeam(member, num) {
    let quantity = parseInt(num);
    let arr = member.split(',');
    let result = [];
    let group = [];
    for (let i = 0; i < arr.length + i; i++) {
      group = [];
      for (let x = 0; x < quantity; x++) {
        let y = Math.floor(Math.random() * arr.length);
        group.push(arr[y]);
        arr.splice(y, 1);
        if (arr.length === 0) {
          break;
        }
      }
      result.push(group);
    }
    return result;
  }
};

module.exports = utils;
