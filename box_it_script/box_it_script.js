// Drawline Border Functions

const drawLine = n => '─'.repeat(n);
const drawTopBorder = n => '┌' + drawLine(n) + '┐';
const drawMiddleBorder = n => '├' + drawLine(n) + '┤';
const drawBottomBorder = n => '└' + drawLine(n) + '┘';

// Draw Bars Around Function

const drawBarsAround = string => '|' + string + '|';

// Putting it all together

const boxIt = arr => {
  const newLines = '\n';
  let l = 0;
  let output = '';
  if (arr.length === 0) {
    l = 0;
    return drawTopBorder(l) + newLines + drawBottomBorder(l);
  } else {
    l = Math.max(...arr.map(a => a.length));
    for (let i = 0; i < arr.length; i++) {
      word = arr[i] + ' '.repeat(l - arr[i].length);
      if (i === arr.length - 1) {
        output += newLines + drawBarsAround(word) + newLines;
      } else
        output +=
          newLines + drawBarsAround(word) + newLines + drawMiddleBorder(l);
    }
    return drawTopBorder(l) + output + drawBottomBorder(l);
  }
};

let array = process.argv.slice(2);

console.log(boxIt(array));
