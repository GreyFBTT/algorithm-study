/*
Write a recursive function called capitalizeWords.
Given an array of words, return a new array containing each word capitalized.
*/

//My Code
function capitalizeWords(arr) {
    let newArr = [];
    function recursive(arr) {
        if (arr.length === 0) return;
        newArr.push(arr[0].toUpperCase());
        return recursive(arr.slice(1));
    }

    recursive(arr);

    return newArr;
}

//Solution Code
function capitalizeWordsSol(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    const res = capitalizeWordsSol(arr.slice(0, -1));
    res.push(arr[arr.length - 1].toUpperCase());

    return res;
}

console.log(capitalizeWordsSol(["car", "taco", "banana", "Bodsjcnvkc"]));
