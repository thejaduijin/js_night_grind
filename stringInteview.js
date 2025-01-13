// Reverse all the words in a sentence 

function reverseSentence(str) {
    let savedStr = str.split(" ").map((word) => {
        return word.split("").reverse().join("");
    })
    return savedStr.join(" ");
}
let reversedStr = reverseSentence("Reverse all the words in a sentence");
console.log(reversedStr, "reversedStr");


// check if provided syntax is a valid array or not

function checkValidArray(ele) {
    return Array.isArray(ele);
}
console.log(checkValidArray([]));
console.log(checkValidArray({}));


//check if given number is an integer

let num = 12.0;
console.log(Number.isInteger(num));// first way

if (num % 1 === 0) {
    console.log("integer");
} else {
    console.log("not an integer");
}


// duplicate the array

function duplicate(arr) {
    return [...arr, ...arr];
    // return arr.concat(arr);
}
console.log(duplicate([1, 2, 3, 4, 5]));


// reverse a number
function reverseNum(num) {
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNum(21))


//second way 
function reverseKaro(num) {
    let rev = 0
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseKaro(12345));


//check if string is palindrome or not

function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return reversed === str;
}
console.log(checkPalindrome("loop"))
// console.log(checkPalindrome("lool"))

// return string into alphabetic order

function makeAlphabetic(str) {
    // return [...str].sort().join("");
    return str.split("").sort().join("")
}
console.log(makeAlphabetic("apple"));


//convert first latter of every word in upper case

function capitalFirstLetter(str) {
    let data = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return data.join(" ");
}
console.log(capitalFirstLetter("apple is sweet"));


// count the number of occurrence of a alphabet in a string
function findOccurrence(str) {
    let occObj = {}
    let data = Array.isArray(str) ? str : str.split("");
    data.forEach((ele) => {
        if (occObj.hasOwnProperty(ele) === false) {
            occObj[ele] = 1;
        } else {
            occObj[ele]++;
        }
    })
    return occObj;
}

console.log(findOccurrence("apple"))
console.log(findOccurrence([1, 1, 2, 5, 1, 5, 2, 8]));


// filter data based on gender
let dataArr = [
    { name: "ankit", gender: "male" },
    { name: "ankita", gender: "female" },
    { name: "sachin", gender: "NA" },
];

let filterData = dataArr.filter((data) => {
    return data.gender === "male"
});
console.log(filterData, "filterData");
// console.log(dataArr,"dataArr");

function filterDataArr(arr) {
    let count = 0;
    arr.forEach((ele) => {
        if (ele.gender !== "male") {
            count++
        }
    });
    // for (let j = 0; j < count; j++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].gender !== "male") {
                arr.splice(j, 1);
                j=0;
            }
        }
    // }
    return arr;
}
console.log(filterDataArr(dataArr));
