// 삽입 정렬
//// case 1 ) var for loop
function insertionVar(arr) {
    for (var i = 1; i < arr.length; i++) {
        let curr = arr[i];
        for (var j = i - 1; j >= 0 && curr < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = curr;
    }

    return arr;
}

// console.log(insertionVar([5, 16, 17, 54, 2, 3, 135, 7]));

//// case 2 ) let for loop
function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let latestCheck;
        for (let j = i - 1; j >= 0; j--) {
            if (currentVal < arr[j]) {
                arr[j + 1] = arr[j];
                latestCheck = j;
            }
        }
        // 바뀔때만 변경할 수 있도록 조건
        if (latestCheck || latestCheck === 0) {
            arr[latestCheck] = currentVal;
        }
    }
    return arr;
}

console.log(insertion([5, 16, 17, 54, 2, 3, 135, 7]));
