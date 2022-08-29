/*
Write a function called collectStrings
which accepts an object and returns an array of all the values in the object that have a typeof string

collectStrings(obj) // ["foo", "bar", "baz"])
*/

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

// My Code && helper Method Solution
function collectStrings(obj) {
    let newArr = [];

    function helper(obj) {
        for (let key in obj) {
            if (typeof obj[key] === "string") {
                newArr.push(obj[key]);
            } else if (typeof obj[key] === "object") {
                return helper(obj[key]);
            }
        }
    }
    helper(obj);

    return newArr;
}

// pure recursion Solution
function collectStringsPureRecursion(obj) {
    let newArr = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            newArr.push(obj[key]);
        } else if (typeof obj[key] === "object") {
            newArr = newArr.concat(collectStringsPureRecursion(obj[key]));
        }
    }

    return newArr;
}

console.log(collectStringsPureRecursion(obj));
