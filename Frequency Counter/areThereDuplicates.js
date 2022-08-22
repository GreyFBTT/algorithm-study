function areThereDuplicates(...args) {
    // 특정하지 않은 여러 변수는 spread로 받기
    // 객체에 담기
    let obj = {};
    for (let i = 0; i < args.length; i++) {
        obj[args[i]] = (obj[args[i]] || 0) + 1;
        // value 값이 2이상인 것이 있다면 같은 값이 있음
        if (obj[args[i]] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3, 12, 1, 5, 24, 2));
