// My Code (Fail)

function insertionSort(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
}

// Solution Code
function insertionSortSol(arr) {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        console.log(j);
        arr[j + 1] = currentVal;
    }
    return arr;
}

function insertionSortSol2(arr) {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        let latestCheck;
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            // latestCheck = j - 1; // j-- 적용을 못받으니까 -1로 적어줌
            latestCheck = j; //생각해보니까 밑에서 다시 +할꺼니까 그냥j로함
        }
        // arr[j + 1] = currentVal; 솔루션코드) 첫실행할때 4자리에 2를 넣어주는코드
        if (arr[i] !== currentVal) {
            // i이전 값이 모두 정렬된 상태여서 바꿀값이 없을때는  arr[j] > currentVal 조건때문에 실행 자체가 되지않아서 latestCheck  = undefined
            // 바로위 포문안에서 값변경이 있을때만 실행 되도록 조건걸어줌
            arr[latestCheck] = currentVal;
        }
    }
    return arr;
}

console.log(insertionSortSol2([4, 2, 3, 5, 6]));
/*
i = 1 
cv = 2
j=0 > 
*/
