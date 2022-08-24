/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

==========================
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
==========================
*/

// case1 ) 가장 먼저 든 생각 for문
function reverse1(str) {
    let newStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newStr.push(str[i]);
    }

    return newStr.join("");
}

// case 2 ) 재귀함수 이용
function reverse2(str) {
    let newStr = [];

    function recursiveReverse(str) {
        if (str.length === 0) return;
        newStr.push(str.slice(-1));
        return recursiveReverse(str.slice(0, -1));
    }
    recursiveReverse(str);

    return newStr.join("");
}

//Solution Code
function reverseSol(str) {
    if (str.length <= 1) return str;
    return reverseSol(str.slice(1)) + str[0];
}

// console.log(reverse2("rithmschool"));
console.log("rithmschool".slice(1) + "r");
