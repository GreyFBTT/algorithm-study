// step 1) 정렬된 두개의 배열을 합병하는 코드
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else if (arr1[i] <= arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        }
    }

    // 한쪽 검사가 끝났을 때 남은 값들을 뒤에 붙이는 loop
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

// step 2) 배열의 길이가 0 or 1이 될 때까지 나누는 코드
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1, 2, 4, 3, 5, 6]));
