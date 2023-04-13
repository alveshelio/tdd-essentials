export const palindromeChecker = (str: string): boolean => {
  return (
    str.trim().split(" ").join("").toLowerCase() ===
    str.trim().split(" ").join("").split("").reverse().join("").toLowerCase()
  );
};
