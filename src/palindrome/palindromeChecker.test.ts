import { palindromeChecker } from "./palindromeChecker";

describe.each([
  { value: "mom", expected: true },
  { value: "Mom", expected: true },
  { value: "wow", expected: true },
  { value: "not", expected: false },
  { value: "race car", expected: true },
  { value: "  race   car  ", expected: true },
  { value: "Never Odd or Even", expected: true },
])("palindromeChecker", ({ value, expected }) => {
  it(`should return ${expected} if ${value} is a palindrome`, () => {
    expect(palindromeChecker(value)).toBe(expected);
  });
});
