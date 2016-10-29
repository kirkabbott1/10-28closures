// function counter() {
//   var count = 0;
//   function nowCount() {
//     count++;
//     return count;
//   }
//   return nowCount;
// }
//
// var count1 = counter();
// var count2 = counter();
// console.log(count1());
// console.log(count2());
// console.log(count2());
// console.log(count1());
//
// function counter(x) {
//   var count = x;
//   function nowCount() {
//     count++;
//     return count;
//   }
//   return nowCount;
// }
//
// var count1 = counter(7);
// var count2 = counter(8);
// console.log(count1());
// console.log(count2());
// console.log(count2());
// console.log(count1());

var battle = function fire() {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];
  function firstFire(row, col) {
    if (board[row][col] === 'o') {
        board[row][col] = 'x';
        return 'Hit!';
      } else {
        return 'Miss';
      }
    }
  return firstFire;
};

fireOne = battle();
fireTwo = battle();

console.log(fireOne(0,1));
console.log(fireTwo(0,0));
