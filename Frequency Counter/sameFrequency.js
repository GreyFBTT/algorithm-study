function sameFrequency(num1, num2) {
    let lookUp = {};
    let first = num1.toString();
    let second = num2.toString();
    // 자리수가 다르면 false (number는 string으로 바꿔 비교)
    if (first.length !== second.length) return false;

    // num1 을 객체로 생성
    for (let i = 0; i < first.length; i++) {
        lookUp[first[i]] = (lookUp[first[i]] || 0) + 1;
    }

    // num1의 객체에서 num2의 값들을 확인하며 소거
    for (let i = 0; i < second.length; i++) {
        if (!lookUp[second[i]]) return false;
        lookUp[second[i]] - 1;
    }

    return true;
}

console.log(sameFrequency(3589578, 5879385));
