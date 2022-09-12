function intToRoman(num) {
  let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanArr = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let s = "";
  for (let i = 0; i < numberArr.length; i++) {
    while (num >= numberArr[i]) {
      s += romanArr[i];
      num -= numberArr[i];
    }
  }
  return s;
}

module.export = intToRoman;
