// helper method 1 => getDigits()
// 0의 자리, 10의 자리, 100의 자리 등 해당 위치의 수를 알아내는 함수

// Case 1
function getDigits(num, digit) {
    let newNum = Math.pow(10, digit + 1);
    return Math.floor((num % newNum) / Math.pow(10, digit));
}

//Case 2
function getDigits2(num, digit) {
    let str = num.toString();
    let ans = str[str.length - 1 - digit];
    return ans;
}

// solution (마지막에 10으로 나눈 나머지 인 이유 => 현재 구하는 자리 수가 가장 작은 1의 자리 수이기 때문 )
function sol(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//=======================================================================================================
//=======================================================================================================

// helper method 2 => digitCount()
// 몇 자리 수로 이루어져 있는지 알아내는 함수

function digitCount(num) {
    return num.toString().length;
}

// solution (log를 이용해 가장 큰 수가 몇 제곱인지 알아내기)
//// 1의 자리 값이 0이기 떄문에 +1을 해줘야 함.
function digitCountSol(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//=======================================================================================================
//=======================================================================================================

// helper method 3 => mostDigits()
// 배열 목록에서 가장 자릿수가 많은 수의 자릿수를 반환한다.

function mostDigits(arr) {
    let mostDigit = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = digitCount(arr[i]);
        if (count > mostDigit) mostDigit = count;
    }

    return mostDigit;
}

// sol
function mostDigitsSol(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }

    return maxDigits;
}

console.log(mostDigits([123, 5, 12312, 3333]));
