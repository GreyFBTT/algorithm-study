// helper
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }

    return maxDigits;
}

function getDigits(num, digit) {
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

// main func
function radixSort(arr) {
    const loopCount = mostDigits(arr);
    for (let i = 0; i < loopCount; i++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigits(arr[j], i);
            bucket[digit].push(arr[j]);
        }
        arr = [].concat(...bucket);
        console.log(arr);
    }

    return arr;
}

console.log(radixSort([1, 5, 23, 561, 4614, 343, 23, 2]));
// console.log(Array.from({ length: 3 }, () => []));
