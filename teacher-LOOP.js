const calcTip = (bill) => {
  // 삼항 연산자
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];

// tips => calcTip()
for (let i = 0; i < bills.length; i++) {
  // tips와 totals 배열 item 채우기
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i])
}
