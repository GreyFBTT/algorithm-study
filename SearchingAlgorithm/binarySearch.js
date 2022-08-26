/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

========================
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
========================
*/

// My Code
function binarySearch(arr, val) {
    let checkMiddle = Math.ceil(arr.length / 2);
    console.log(checkMiddle, "dd");
    console.log(arr);

    if (arr[checkMiddle] > val) {
        console.log("val이 작은경우");
        return binarySearch(arr.slice(0, checkMiddle));
    } else if (arr[checkMiddle] < val) {
        console.log("val이 큰경우");
        return binarySearch(arr.slice(checkMiddle + 1));
    }

    return checkMiddle;
}

// // Solution Code
function binarySearchSol(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch2([2, 3, 4, 5], 5));
