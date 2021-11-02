import { groupAnagrams } from './index';

test("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']", () => {
  const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']).map(
    (e) => e.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).toString()
  );
  expect(result).toContain(['bat'].toString());
  expect(result).toContain(['nat', 'tan'].toString());
  expect(result).toContain(['ate', 'eat', 'tea'].toString());
});

test("Input: ['']", () => {
  expect(groupAnagrams([''])).toEqual([['']]);
});
