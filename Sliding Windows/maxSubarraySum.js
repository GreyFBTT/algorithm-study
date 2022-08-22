// my code
function maxSubarraySum(arr, num) {
    // num보다 arr의 길이가 짧을 때 null
    if (arr.length < num) return null;

    let total = 0;

    for (let i = 0; i < num; i++) {
        total += arr[i];
    }

    let newTotal = total;
    let maxSum = total;

    for (let i = num; i < arr.length; i++) {
        console.log(maxSum);
        newTotal = newTotal + arr[i] - arr[i - num];
        if (newTotal > maxSum) maxSum = newTotal;
    }

    return maxSum;
}

//solution
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}

console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
