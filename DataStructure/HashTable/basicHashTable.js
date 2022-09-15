// Basic Hash
// hash('string',length)
// 문자열을 입력받아 배열 크기보다 작은 숫자로 변환

function hash(str, length) {
    let total = 0;
    for (let key of str) {
        let value = key.charCodeAt(0) - 96;
        total = (total + value) % length;
    }

    return total;
}

console.log(hash("hello", 10));

// Improve Basic Hash
// length 가 소수여야 하는거 아닌가? 왜 곱하지..?
function improveHash(str, length) {
    let total = 0;
    // 소수가 큰 값일수록 좋다.
    let primeNumber = 31;
    for (i = 0; i < Math.min(length, 100); i++) {
        let value = str[i].charCodeAt(0) - 96;
        total = (total * primeNumber + value) % length;
    }
}

console.log(improveHash("hello"));
