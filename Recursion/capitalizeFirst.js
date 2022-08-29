/*
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.

*/

//My Code
function capitalizeFirst(arr) {
    let newArr = [];

    function capitalize(arr) {
        if (arr.length === 0) return;
        let newStr = arr[0];
        newStr = newStr[0].toUpperCase() + newStr.slice(1);
        newArr.push(newStr);
        return capitalize(arr.slice(1));
    }

    capitalize(arr);

    return newArr;
}

// Solution Code
function capitalizeFirstSol(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirstSol(array.slice(0, -1));
    const string =
        array.slice(array.length - 1)[0][0].toUpperCase() +
        array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

console.log(capitalizeFirstSol(["car", "taco", "banana"]));
