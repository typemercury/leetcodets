// tags: #string
// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

export const isValid = (s: string): boolean => {
  const parenthesesMap: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (parenthesesMap[char]) {
      if (stack[stack.length - 1] !== parenthesesMap[char]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
