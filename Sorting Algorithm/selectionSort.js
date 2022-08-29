// My Code
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] >= arr[j]) min = j;
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

// Solution
// min 값이 바뀌지 않았을 경우 swap을 할 필요가 없다. (조건 추가)
function selectionSortSol(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] >= arr[j]) min = j;
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// Solution Refactor
function selectionSortSol2(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] >= arr[j]) min = j;
        }
        if (min !== i) swap(arr, i, min);
    }
    return arr;
}

console.log(selectionSortSol2([2, 3, 56, 61, 12, 3, 423, 33]));
