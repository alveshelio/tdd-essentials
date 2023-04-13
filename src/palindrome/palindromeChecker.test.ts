import { palindromeChecker } from "./palindromeChecker";

describe.each([
  { value: "mom", expected: true },
  { value: "Mom", expected: true },
  { value: "wow", expected: true },
  { value: "not", expected: false },
])("palindromeChecker", ({ value, expected }) => {
  it(`should return ${expected} if ${value} is a palindrome`, () => {
    expect(palindromeChecker(value)).toBe(expected);
  });
});
