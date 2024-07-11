const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter array elements separated by space: ', input => {
  const arr = input.split(' ').map(Number);
  console.log(secondHighest(arr));
  readline.close();
});

function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;
  
  let first = -Infinity;
  let second = -Infinity;
  
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  
  return second === -Infinity ? -Infinity : second;
}