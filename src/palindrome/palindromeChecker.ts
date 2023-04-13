export const palindromeChecker = (str: string): boolean => {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
};
