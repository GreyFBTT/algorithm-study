// merge sort helper method
//// 정렬된 두 배열을 받아 정렬된 상태로 병합하는 함수
function mergeSortHelper(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}

// merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeSortHelper(left, right);
}

console.log(mergeSort([5, 16, 17, 54, 2, 3, 135, 7]));
