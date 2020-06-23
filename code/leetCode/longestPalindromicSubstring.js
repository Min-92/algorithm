const isPalindromic = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

var longestPalindrome = function (s) {
    if (s.length === 1 || !s.length) {
        return s;
    }

    for (let size = s.length; size > 1; size--) {
        for (let i = 0; i + size <= s.length; i++) {
            const str = s.substring(i, i + size);
            if (isPalindromic(str)) {
                return str;
            }
        }
    }

    return s[0];
};
