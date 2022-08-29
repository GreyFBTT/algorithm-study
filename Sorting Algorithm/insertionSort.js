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

insertionSortSol([4, 2, 3, 5, 6]);
