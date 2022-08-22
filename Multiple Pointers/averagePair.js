// my code
function averagePair(arr, target) {
    let first = 0;
    let second = 1;

    while (first < arr.length - 1) {
        let average = (arr[first] + arr[second]) / 2;
        if (average === target) {
            return true;
        } else if (average < target) {
            second++;
        } else {
            first++;
            second = first + 1;
        }
    }

    return false;
}

// solution
function averagePairSol(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) return true;
        else if (avg < num) start++;
        else end--;
    }
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19, 1], 8));
