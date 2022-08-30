// My Code (Fail)
function pivot1(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    let pivotIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] >= arr[i]) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    swap(arr, 0, pivotIndex);
    console.log(arr);
    if (arr.length > 1) {
        pivot1(arr.slice(0, pivotIndex));
        pivot1(arr.slice(pivotIndex + 1));
    }
    return arr;
}

console.log(pivot1([10, 5, 6, 2, 3, 4, 1, 9]));

// Solution Code
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[start] > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    // left === right 일 때 array의 길이가 1이 된다.
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return arr;
}

// console.log(quickSort([10, 5, 6, 2, 3, 4, 1, 9]));
