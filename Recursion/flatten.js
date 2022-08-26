/*
Write a recursive function called flatten  which accepts an array of arrays and returns a new array with all values flattened.

=======================
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
=======================
*/

//My Code
function flatten(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === Array) {
            newArr = newArr.concat(flatten(arr[i]));
            console.log("!!!!!");
        } else {
            newArr.push(arr[i]);
        }
        console.log(newArr);
    }

    return newArr;
}

//Solution Code
function flattenSol(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flattenSol(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(flattenSol([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
