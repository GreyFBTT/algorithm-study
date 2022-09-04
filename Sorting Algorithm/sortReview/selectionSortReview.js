// selectionSort
function selection(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }

    return arr;
}

// refactor
function selectionRe(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        // swap이 필요없는 경우 (기준이 최소값일 경우)
        if (minIdx !== i) {
            swap(arr, i, minIdx);
        }
    }

    return arr;
}

console.log(selectionRe([5, 16, 17, 54, 2, 3, 135, 7]));
