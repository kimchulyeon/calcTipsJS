'use strict';

// const calcTip = (bill) => {
//   // 삼항 연산자
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1], calcTip(bills[2]];
// console.log(bills, tips);

//-------------------------------------------------------------------------------------

const calcTip = (bill) => {
  // 삼항 연산자
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];

// tips => calcTip()
// totals => bills + tips
for (let i = 0; i < bills.length; i++) {
  // tips와 totals 배열 item 채우기
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i])
}

console.log(totals);
console.log(tips);