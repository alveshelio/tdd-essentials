export const palindromeChecker = (str: string): boolean => {
  return str === str.split("").reverse().join("");
};
