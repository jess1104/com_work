// console.log(a);
// var a = 2;
// console.log(b);
// let b = 3;

// fetch("./biggo_sitetype.json")
//   .then((d) => d.json())
//   .then((jd) => console.log(jd));

const family = ["dad", "mom", "sis", "grandma"];
let bobFam = family.map(function (element) {
  return `Bob's ${element}`;
});
// 箭頭函數
bobFam = family.map((element) => {
  return `Bob's ${element}`;
});
// 參數只有一個可拿掉括號
bobFam = family.map((element) => {
  return `Bob's ${element}`;
});
// 當箭頭函式裡只有單行程式碼，可以拿掉大括號，並省略return
bobFam = family.map((element) => `Bob's ${element}`);
