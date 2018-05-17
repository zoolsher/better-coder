/**
 * @param {string} digits
 * @return {string[]}
 */
interface SArray {
  [index: string]: string[];
}
var letterCombinations = function(digits: string): string[] {
  if (digits.length === 0) {
    return;
  }
  let map: SArray = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['q', 'p', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  function dekaer(a: string[], b: string[]): string[] {
    let res: string[] = [];
    for (let indexA = 0; indexA < a.length; indexA++) {
      for (let indexB = 0; indexB < b.length; indexB++) {
        res.push(a[indexA] + b[indexB]);
      }
    }
    return res;
  }
  let res: string[] = map[digits[0]];
  for (let i = 1; i < digits.length; i++) {
    res = dekaer(res, map[digits[i]]);
  }
  return res;
};
