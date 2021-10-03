//! sort, reavers, tostring, join, switchcase, foreach, for in, for of
//! 1
// var cityArray = ["tel aviv", "jerusalem", "petah tikva", "afula", "betel"];
// console.log(cityArray.sort());
//!2
var numArray = [30, 1, 13, 40, 2, 7, 51, 23];
numArray.sort(function (a, b) {
  return a - b;
});
//!3

//!4

//!5
// var num = 5;
// switch (num) {
//   case 2:
//     console.log(num * 2);
//     break;
//   case 5:
//     console.log(num * 10);
//     break;
//   case 7:
//     console.log(num * 9);
//     break;
//   case 10:
//     console.log(num * 8);
//     break;
//   default:
//     console.log(num);
//     break;
// }

//!6 forEach
// var array = ["hana", "sara", "lea", "rivka", "dina"];
// array.forEach((element, index) => {
//   console.log(element, index);
// });

//!7 forEach
// var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// numArray.forEach((element) => {
//   sum += element;
// });
// console.log(sum);

//!8 for of
// var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// for (const num of numArray) {
//   sum += num;
// }
// console.log(sum);

//!9 for of
// var product = [
//   { name: "tshirt", price: 30 },
//   { name: "skirt", price: 50 },
//   { name: "hat", price: 15 },
// ];

// for (const element of product) {
//   console.log(element);
// }

//!10 for in
// var randObje = { name: "tshirt", price: 30 };
// for (const key in randObje) {
//   console.log(key, randObje[key]);
// }
// --for in in array gives the index
// --for in in object gives the key

//!11
// const fruits = [
//   { name: "apple", price: 30 },
//   { name: "banana", price: 50 },
//   { name: "haorangt", price: 15 },
// ];

// fruits.forEach((element) => {
//   for (const key in element) {
//     console.log(key, element[key]);
//   }
// });
