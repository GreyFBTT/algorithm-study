// 버블 정렬
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//// Refactor for
//// 마지막 숫자는 불필요하게 배열 범위 밖의 undefined과 비교한다
//// 가장 큰 수가 뒤로 가는 방식으로 마지막으로 옮겨진 수는 비교할 것 없이 가장 크다.
function bubbleSortRefactor(arr) {
    // ES5 문법
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let noSwap;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        // i 값이 0이 아닌 경우 정렬이 되어 있음에도 남은 loop를 돌아야한다.
        // but, 내부 loop에서 변경점이 없을 경우 모두 정렬이 되어 있음을 의미하므로 break로 loop을 종료시킨다.
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSortRefactor([5, 16, 17, 54, 2, 3, 135, 7]));
