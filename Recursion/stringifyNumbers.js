/*
Write a function called stringifyNumbers which takes in an object and finds all of the values,
which are numbers and converts them to strings.

Recursion would be a great way to solve this!
*/

let obj = {
    num: 1,
    test: [5],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

// My Code
function stringifyNumbers(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object") {
            stringifyNumbers(obj[key]);
        }
    }

    return obj;
}

//Solution Code
function stringifyNumbersSol(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbersSol(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

console.log(stringifyNumbers(obj));
