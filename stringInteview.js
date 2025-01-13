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

let num = 12.5;
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
        return word.charAt(0).toUpperCase() + word.substring(1); //or word.slice(1);
    });
    return data.join(" ");
}
console.log(capitalFirstLetter("apple is sweet"));


// count the number of occurrence of a alphabet in a string
function findOccurrence(str) {
    let occObj = {}
    let data = Array.isArray(str) ? str : str.split("");
    data.forEach((ele) => {
        // if (occObj.hasOwnProperty(ele) === false) {
        //     occObj[ele] = 1;
        // } else {
        //     occObj[ele]++;
        // }

        let char = ele;
        if (!occObj[char]) {
            occObj[char] = 1;
        } else {
            occObj[char]++;
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
            j = 0;
            console.log("arr[j]")
        }
    }
    // }
    return arr;
}
console.log(filterDataArr(dataArr));


//case converter
let str = "ram-kumar"; //ramKumar , //RamuKmar

let str3 = str.split("-");
let data = str3[1].charAt(0).toUpperCase() + str3[1].slice(1)
let cc = str3[0] + data;

let camelCase = str3.map((ele, index) => {
    if (index === 0) {
        return ele;
    } else {
        return ele.charAt(0).toUpperCase() + ele.slice(1);
    }
});

// let data = str3.map((ele)=>{
//    return ele.charAt(0).toUpperCase() + ele.slice(1);
// });

console.log(camelCase.join(""), "camelCase");


//currency 
// let lang = ["en","es","jpy","eu","yen"];

function currencyFormatter(val) {
    // if (langName === "en") {
    //     return val.toFixed(2);
    // } else {
    //     return val.toFixed(2).replace(".", ",");
    // }
    return val.toString().split("").splice(0, 3).join("") + "," + val.toString().slice(3);

}
console.log(currencyFormatter(10000));

//shift all 0 value in the end of arr
let dataA = [1, 0, 2, 0, 1];//1,2,1,0,0


function setZeroToEnd(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === 0) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;


    // let storeZero = [];
    // let nonZero = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 0) {
    //         storeZero.push(arr[i]);
    //     }else{
    //         nonZero.push(arr[i])
    //     }
    // }
    // return [...nonZero,...storeZero];
}
console.log(setZeroToEnd(dataA))


//checkAnagram
function checkAnagram(a, b) {
    if (a.length !== b.length) {
        return "not a valid anagram"
    } else {
        for (let i = 0; i < a.length; i++) {
            if (!b.includes(a[i])) {
                return "not a valid anagram"
            }
        }
        return "it's a valid anagram"
    }

    // let first = a.split("").sort().join("");
    // let second = b.split("").sort().join("");
    // console.log(first,second)
    // return first === second

}

console.log(checkAnagram("strr", "star"));

let arr1 = [1, 2, 3, 4, [1, 2]];
// let copy = [...arr1];
// copy[4][1] = 10;
// console.log("arr1", arr1)

// console.log("copy", copy)
let arr2 = [1, 2, 3, 4]

let arr3 = arr2;
console.log(arr3 === arr2);

let DeepCopy = JSON.parse(JSON.stringify(arr1));
DeepCopy[4][1] = 10;
console.log("DeepCopy", DeepCopy)
console.log("arr1", arr1)
console.log(DeepCopy === arr1);


const obj = {
    name: "ankit",
    age: 20,
    hobbies: ["reading", "coding"],
}

let obj2 = Object.assign({}, obj);
obj2.name = "kumar";
console.log(obj2.hobbies[2] = "dance");
console.log(obj2, obj);
