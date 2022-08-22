// my code
function findLongestSubstring(str) {
    let newStr = [];
    let maxLen = 0;

    for (let i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) == -1) {
            newStr.push(str[i]);
            maxLen = Math.max(maxLen, newStr.length);
        } else {
            let sliceChar = newStr.indexOf(str[i]) + 1;
            newStr = newStr.slice(sliceChar);
            newStr.push(str[i]);
        }
    }

    return maxLen;
}

// solution
function findLongestSubstringSol(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
            console.log(start);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
        console.log(seen);
    }
    return longest;
}

console.log(findLongestSubstringSol("thisisawesome"));
