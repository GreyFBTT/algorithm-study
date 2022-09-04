// n 자리수가 무엇인지?
// 몇 자리 수 인지?
// 제일 큰 숫자의 자리수?
function digitNumber(num, i) {
    if (i > digits(num)) return NaN;
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(digitNumber(5002, 4));

function digits(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digits(arr[i]));
    }

    return maxDigits;
}

function radix(arr) {
    let loopCount = maxDigits(arr);
    for (let i = 1; i <= loopCount; i++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            bucket[digitNumber(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...bucket);
    }

    return arr;
}

console.log(radix([5002, 16, 17, 54, 2, 3, 135, 7]));
