import { palindromeChecker } from "./palindromeChecker";

describe.each([{ value: "mom", expected: true }])(
  "palindromeChecker",
  ({ value, expected }) => {
    it(`should return ${expected} if ${value} is a palindrome`, () => {
      expect(palindromeChecker(value)).toBe(expected);
    });
  }
);
