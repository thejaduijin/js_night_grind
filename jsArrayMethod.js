//map method
const arr = [1, 2, 3];
const squared = arr.map(num => num ** 2); // [1, 4, 9]
console.log("squared", squared);

//filter method
const arr1 = [1, 2, 3, 4];
const even = arr1.filter(num => num % 2 === 0); // [2, 4]
console.log("even", even);

//reduce method
const arr2 = [1, 2, 3];
const sum = arr2.reduce((acc, num) => acc + num, 0); // 6
console.log("sum", sum);

//forEach method
const arr3 = [1, 2, 3];
arr3.forEach(num => console.log(num)); // Logs: 1, 2, 3

//find method
const arr4 = [1, 2, 3];
const firstEven = arr4.find(num => num % 2 === 0); // 2
console.log("firstEven", firstEven);

//findIndex method
const arr5 = [1, 2, 3];
const index = arr5.findIndex(num => num > 2); // 2
console.log("index", index);

//some method
const arr6 = [1, 2, 3];
const hasEven = arr6.some(num => num % 2 === 0); // true
console.log("hasEven", hasEven);

//every method
const arr7 = [2, 4, 6];
const allEven = arr7.every(num => num % 2 === 0); // true
console.log("allEven", allEven);

//sort method
const arr8 = [3, 1, 2];
arr8.sort((a, b) => a - b); // [1, 2, 3]
console.log("arr8", arr8);

const arrS = [3, 111, 2];
console.log(arrS.sort((a, b) => {
    return a - b;
}))

//splice method
const arr9 = [1, 2, 3, 4, 5, 6];
arr9.splice(0, 0); // [1, 4, 3]
console.log("arr9", arr9);

//slice method
const arr10 = [1, 2, 3, 4];
let str = "golu";
const sliced = str.slice(1, 3);
const subArray = arr10.slice(1, 3); // [2, 3]
console.log(sliced, "subArray", subArray);

//concat method
const arr11 = [1, 2];
const arr12 = [3, 4];
const result = arr11.concat(arr12); // [1, 2, 3, 4]
console.log("result", result);

//join method
const arr13 = [1, 2, 3];
const str1 = arr.join('-'); // "1-2-3"
console.log(str1, "str1");

//shift method
const arr14 = [1, 2, 3];
const first = arr14.shift(); // 1, arr is now [2, 3]
console.log(first, "first");

//unshift method
const arr15 = [2, 3];
let data = arr15.unshift(2); // [1, 2, 3]
console.log(arr15, "arr", data);

//reverse method
const arr16 = [1, 2, 3];
arr16.reverse(); // [3, 2, 1]
console.log(arr16, "arr16");


//If you need string mutability-like behavior, consider converting the string into an array, performing splice() on the array, and converting it back to a string:
let str2 = "Hello World";
let strArray = str2.split(""); // Convert to array
strArray.splice(6, 5, "Universe"); // Modify
str2 = strArray.join(""); // Convert back to string
console.log(str2); // "Hello Universe"
