function naiveStringSearch(str, subStr) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === subStr[0]) {
            if (str.slice(i, i + subStr.length) === subStr) count++;
        }
    }

    return count;
}

function naiveStringSearch2(str, subStr) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < subStr.length; j++) {
            if (subStr[j] !== str[i + j]) break;
            if (j === subStr.length - 1) count++;
        }
    }

    return count;
}

console.log(naiveStringSearch2("abcabcab", "abca"));
