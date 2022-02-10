// checks if string is a palindrome

function isPali(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return false;
        }
    }
    return true;
}

console.log(isPali("tacocat"))


// find longest palindrome substring

// function that loops through main string
function longestPalindrome(str) {
    if (!str || str.length <= 1) {
        return str;
    }
    var longest = str.substring(0, 1);
    for (var i = 0; i < str.length; i++) {
        // "odd" palindrome check
        var temp = expand(str, i, i);
        if (temp.length > longest.length) {
            longest = temp;
        }
        // "even" palindrome check
        temp = expand(str, i, i + 1);
        if (temp.length > longest.length) {
        longest = temp;
        }
    }
    return longest;
}

// function that expands around a point and checks if expansions are equal
function expand(str, begin, end) {
    while (begin >= 0 && end <= str.length - 1 && str[begin] === str[end]) {
        begin--;
        end++;
    }
    return str.substring(begin + 1, end);
}

console.log(longestPalindrome("my favorite racecar erupted"))