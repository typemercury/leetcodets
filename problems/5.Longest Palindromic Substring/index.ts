// #string
// Given a string s, find the longest palindromic substring in s
// --- Examples
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

export function longestPalindrome(s: string): string {
  let result = {
    from: 0,
    length: 1,
  };
  const findPalindromFromCenter = findPalindromeOf(s);

  for (let i = 0; i < s.length; i++) {
    // odd length case, e.g. aba
    let palindrome = findPalindromFromCenter(i - 1, i + 1);
    if (palindrome.length > result.length) {
      result = palindrome;
    }

    // even length case, e.g. abba
    palindrome = findPalindromFromCenter(i, i + 1);
    if (palindrome.length > result.length) {
      result = palindrome;
    }
  }
  return s.substr(result.from, result.length);
}

const findPalindromeOf = (s: string) => (left: number, right: number) => {
  let palindromeLen = 1;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    palindromeLen = right - left + 1;
    left--;
    right++;
  }

  return {
    from: left + 1,
    length: palindromeLen,
  };
};
