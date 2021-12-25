'use strict';
const bills = [125, 555, 44];
const tips = new Array();

// const calcTip = function(arr) {
//   // bills배열 아이템 하나 하나~
//   arr.forEach(bill => {
//     const fifteenTip = bill * 0.15;
//     const twentyTip = bill * 0.20;
    
//     if(bill >= 50 && bill <= 300) {
//       // tips라는 빈 배열에 추가
//       tips.push(fifteenTip);
//     } else {
//       tips.push(twentyTip);    
//     }
//   });
// };
// calcTip(bills);
// console.log(tips);


// 축약으로 수정
const calcTip = arr => {
  arr.forEach(bill => {
    const fifteenTip = bill * 0.15;
    const twentyTip = bill * 0.2;

    bill >= 50 && bill <= 300 ? tips.push(fifteenTip) : tips.push(twentyTip);
  });
};
calcTip(bills);
console.log(tips);