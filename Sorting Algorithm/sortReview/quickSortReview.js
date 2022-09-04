// pivot helper
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

// Quick Sort
function quick(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quick(arr, left, pivotIdx - 1);
        quick(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(quick([5, 16, 17, 54, 2, 3, 135, 7]));
