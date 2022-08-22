function minSubArrayLen(arr, num) {
    // 갯수를 늘려가며 인접한 것 합 구해야함.
    // 합이 크면 return

    let total = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) return (count = 1);
        count++;
        total = total + arr[i + count] - arr[i - 1];
        if (total > num) return count;
    }

    while (total > num) {
        count++;
    }
}
