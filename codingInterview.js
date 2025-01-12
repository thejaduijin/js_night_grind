// Find the Largest Number in an Array

//without pre defined function
function findLargest(arr) {
    let Largest = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (Largest < arr[index]) {
            Largest = arr[index];
        }
    }
    return Largest;
}
// console.log(findLargest([1,52,45,99,1,2]));

//with pre defined function
function findLargestNum(arr) {
    return Math.max(...arr);
}
// console.log(findLargestNum([1,52,45,99,1,2]));


// Find the second Largest Number in an Array
function findSecondLargest(arr) {
    let data = arr.sort((a, b) => {
        return a - b;
    });
    console.log(data);
    return data[data.length - 2];
}
// console.log(findSecondLargest([1, 52, 45, 99, 1, 2]));

// Find the second Largest Number in an Array basic approach
function findSecondLargestNum(arr) {
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > largest) {
            secondLargest = largest;
            largest = arr[index];
        } else if (arr[index] > secondLargest && arr[index] !== largest) {
            secondLargest = arr[index];
        }
    }
    return {
        largest, secondLargest
    }
}
// console.log(findSecondLargestNum([1, 52, 45, -99, 1, 2]));


// Find the nth Largest Number in an Array 
function findNthLargestNum(arr, n) {
    let temp;
    for (let index = 0; index < arr.length; index++) {
        for (let j = index + 1; j < arr.length; j++) {
            if (arr[index] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[index];
                arr[index] = temp;

                // [arr[index], arr[j]] = [arr[j], arr[index]]
            }
        }
    }
    const dataIndex = arr[n - 1];
    return { arr, dataIndex }
}

let arr = [1, 52, 45, 99, 11, 21];
let data = findNthLargestNum(arr, 4);
console.log(data);


// find k largest element sort method
let findKthLargest = function (num, k) {
    let data = num.sort((a, b) => b - a);
    let data2 = data[k - 1];
    return data2;
};

let num = [3, 2, 1, 5, 6, 4], k = 2;
console.log(findKthLargest(num, k))
