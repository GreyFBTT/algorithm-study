function solution(clothes) {
    var answer = 1;
    const obj = {};
    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 0) + 1;
    }

    for (let key in obj) {
        answer *= obj[key] + 1;
    }
    return answer - 1;
}

// 경우의 수 중 여조건을 뺀 경우
// 숫자만 가지고 어떻게 계산할지 고민
// 갯수뿐만 아니라 안입는 경우도 포함되어야 하므로 +1
