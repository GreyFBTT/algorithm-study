function areThereDuplicates(...args) {
    args.sort((a, b) => a - b);
    // 포인터 설정
    let i = 0;

    // 두번 째 포인터를 idx 1부터 진행하면서 같은 값 나올 시 return true
    for (let j = 1; j < args.length; j++) {
        if (args[i] !== args[j]) {
            i++;
        } else {
            return true;
        }
    }
    // 끝까지 진행했는데 없으면 false
    return false;
}

console.log(areThereDuplicates(1, 26, 3, 5, 1, 24));
