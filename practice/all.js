import { play } from "./funtion.js";
// let data = {
//     "contentType": "application/json; charset=utf-8",
//     "isImage": false,
//     "data": {
//       "XML_Head": {
//         "Listname": "1",
//         "Language": "C",
//         "Orgname": "397000000A",
//         "Updatetime": "2021/01/20 08:40:00",
//         "Infos": {
//           "Info": [
//             {
//               "Id": "C1_397000000A_000230",
//               "Status": "2",
//               "Name": "田寮月世界",
//               "Zone": "",
//               "Toldescribe": "田寮「月世界」特殊景觀在地理學上稱為「惡地」，是由於地殼的「回春作用」，經年累月的經由雨水與河水強烈侵蝕，將泥沙堆積在泥岩上，地層變動後，泥沙更與泥岩混合再經由風化、沉積作用，形成今日地貌，僅適於耐旱、耐鹽的淺根植物（如：箭竹）、濱海植物生長。從田寮到旗山台28線沿路除了月世界景觀，還有大小不等的二十多個泥火山，常呈現間歇性的噴發現象，噴發的規模則視地底天然氣與泥漿的累積壓力而定，噴發後的泥流堆積地區。",
//               "Description": "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
//               "Tel": "886-7-6367036",
//               "Add": "高雄市823田寮區崇德里月球路36號",
//               "Zipcode": "823",
//               "Travellinginfo": "無障礙交通：高鐵台南站 → 沙旗美月世界快線公車 → 月世界 → 旗山高鐵左營站 → 旗美快線公車 → 旗山 → 轉搭沙旗美月世界快線公車 → 月世界",
//               "Opentime": "遊客中心：09:00–17:00月世界：全天候開放",
//               "Gov": "397000000A",
//               "Px": "120.38898",
//               "Py": "22.88600"
//             },
//             {
//               "Id": "C1_397000000A_000234",
//               "Status": "2",
//               "Name": "西子灣風景區",
//               "Zone": "",
//               "Toldescribe": "西子灣以夕陽美景及天然礁石聞名，區內包括了西子灣海水浴場、海濱公園、打狗英國領事館....等景點；可觀海景、遠眺高雄港；海水浴場極富熱帶氣息、南國風情，每當夜幕低垂，晚霞的照耀，漁船燈火閃爍其間，呈現海天一色美景。",
//               "Description": "西子灣以夕陽美景及天然礁石聞名，區內包括了西子灣海水浴場、海濱公園、打狗英國領事館....等景點。",
//               "Tel": "886-7-5250005",
//               "Add": "高雄市804鼓山區蓮海路51號",
//               "Zipcode": "804",
//               "Travellinginfo": "搭高鐵至左營站下或搭臺鐵至高雄站下 → 轉搭高雄捷運至西子灣站下 → 轉搭高雄市公車(99路、橘1A路)至西子灣站下。",
//               "Opentime": "西子灣海水浴場：10:00–16:00",
//               "Gov": "397000000A",
//               "Px": "120.26391",
//               "Py": "22.62442"
//             }
//           ]
//         }
//       }
//     },
//     "id": "b69ffff9-23a5-44a6-a398-089b11a5f84c",
//     "success": true
//   }
//   console.log(data);

// function add (num1,num2){
//     console.log(num1+num2);
// }

// add(4,5);
// const el = document.querySelector("h1");
// el.textContent = "Hello World!";

// const myLink = document.querySelector("a");
// myLink.setAttribute("class", "red");

// const title = document.querySelector("h2");
// const btn = document.querySelector("button");
// const btn2 = document.querySelector(".discount");
// // console.log(btn2)
// let count = 0;
// btn.addEventListener("click", function (e) {
//   count += 1;
//   title.textContent = count;
// });
// btn2.addEventListener("click", function (e) {
//   count -= 1;
//   title.textContent = count;
// });

// let home = [
//   {
//     dadName: "jack",
//     age: 55,
//   },
//   {
//     momName: "Linda",
//     age: 45,
//   },
//   "dog",
// ];
// home[0].fat = "heavy";
// home.push({ sonName: "herry", age: 22 });
// home.splice(2, 1);
// // console.log(home);

// // forEach練習
// let data = [30, 40, 100];

// let total = 0;

// data.forEach(function (item, index) {
//   total += item;
//   // console.log(total)
// });
// console.log(total);

// let socer = ["足球", 12, "3戰2勝", "jcksdl"];
// let basketball = ["籃球", 5, "7戰4勝"];

// const soc = document.querySelector("#soc");
// const bas = document.querySelector("#bas");

// soc.addEventListener("click", function (e) {
//   let str = "";
//   socer.forEach(function (item) {
//     str += `<p>${item}</p>`;
//   });
//   document.querySelector(".content").innerHTML = str;
// });
// bas.addEventListener("click", function (e) {
//   let str = "";
//   basketball.forEach(function (item) {
//     str += `<p>${item}</p>`;
//   });
//   document.querySelector(".content").innerHTML = str;
// });
// 匿名函式
// console.log((function(x,y){return x*y})(5,6));

// 函式表達式
// function sq(x) {
//   return x * x;
// }
// // console.log(sq(5));

// // 箭頭函式
// // arguments
// function add() {
//   let len = arguments.length;
//   let sum = 0;
//   for (var i = 0; i < len; i++) {
//     // console.log(arguments[i]);
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(add(2,3,4))
// 其餘參數(rest parameter)...開頭

// for loop 取值並做換算後放進一個新陣列
// const years = [1978,1966,1994,1958]
// const age = [];

// for(let i = 0; i<years.length; i++){
//     age.push(2021- years[i])
// }
// console.log(age)

// for loop 搭配continue
// const Jess = ['Jess','student',18,['mary','judy'],'Chinese'];
// const string = []
// for(let i = 0; i<Jess.length; i++){
//     // 如果不是string就繼續
//     if(typeof Jess[i]!== 'string')continue;
//     console.log(Jess[i])
//     string.push(Jess[i]);
// }
// console.log(string);

// 顛倒順序
// const Jess = ['Jess','student',18,['mary','judy'],'Chinese'];
// // Jess[4]-->Jess[3]-->Jess[2].....
// for(let i = Jess.length-1; i>=0; i--){
// // for(最後一個數; 這個數>=0時; 這個數會遞減)
//     console.log(`順序：${i}`,Jess[i]);
// }

// while loop (可以寫一些判斷)
// for(let i = 1;i<=5;i++){
//     console.log(`lift ${i} times`)
// }

// let i = 1;
// while(i <=5){
//     console.log(`lift ${i} times`);
//     i++;
// }
// 骰子
// Math.random()介於0到1之間(包含 0，不包含1)
// let dice = Math.ceil(Math.random()*6);
// // 當不是6
// while(dice !== 6){
//     console.log(`you dice ${dice} points`);
//     // 還要在亂數產生直到＝6
//     dice = Math.ceil(Math.random()*6);
//     if(dice === 6)console.log('你骰到6囉')
// }

// 從陣列中找出最大值跟最小
// const theBiggest = function (temps) {
//   // 先預設最大/最小從第0個開始
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     // 當第i個大於max就會取代它
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
// };
// theBiggest([3, 7, 11, 5, 23]);

// promise
// const req = fetch('https://restcountries.eu/rest/v2/name/portugal');
// // console.log(req);

// const getCountryData = function(country){
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(
//     function(res){
//     console.log(res)
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data);
//     const neighbor = data[0].borders[0];
//     console.log(neighbor);
//     if(!neighbor)return;
//     return fetch(`https://restcountries.eu/rest/v2/name/${neighbor}`);
//   })
//   .then((res)=>res.json())
//   .then((data)=>{
//     console.log(data)
//   })
//   .catch((err)=>{console.error(`${err}`)})
// }
// getCountryData('usa')

// ES6
// const person = {
//   name: "John",
//   walk() {
//     console.log(this);
//   },
// };

// person["name"] = "Jess";
// const member = "member";
// person[member] = "Judy";
// // console.log(person);
// const walk = person.walk.bind(person);
// walk();

// class
// Es5
// function Person(name, age) {
//   (this.name = name), (this.age = age);
// }
// Person.prototype.sayHi = function () {
//   console.log(`Hi I am ${this.name},${this.age} years old`);
// };

// const d = new Person("Danny", 28);
// console.log(d);
// console.log(d.sayHi());
// // Es6
// class PersonNew {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi I am ${this.name},${this.age} years old`);
//   }
// }

// const e = new PersonNew("Elex", 33);
// console.log(e.sayHi());
play();
