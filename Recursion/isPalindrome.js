/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

============================
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
============================
*/

// My Code
function isPalindrome(str) {
    function reverseStr(str) {
        if (str.length === 0) return "";
        return reverseStr(str.slice(1)) + str[0];
    }
    return str === reverseStr(str) ? true : false;
}

// Solution Code
function isPalindromeSol(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindromeSol(str.slice(1, -1));
    return false;
}

console.log(isPalindrome("amanaplanacanalpanama"));
