function fib() {
  let first = 0;
  let second = 1;
  let sum = 0;
  const list = [];
  for (let i = 0; i < 50; i++) {
    sum = first + second;
    list.push(sum);
    first = second;
    second = sum;
  }
  return list;
}

// console.log(fib());

function numsToStrings(array) {
  return _.flatten(array);
}

console.log(numsToStrings(fib()));

function numEvenNums(array) {
  const evens = _.filter(array, function (num) { return num % 2 === 0; });
  return evens.length;
}

console.log(numEvenNums(fib()));
