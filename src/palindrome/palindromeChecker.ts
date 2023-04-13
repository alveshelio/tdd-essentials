import { joinWords, reverseString } from "../utils/utils";

/**
 * Checks if a string is a palindrome. It must ignore spaces and case.
 * @param str
 *
 * @example "mom" // true
 * @example "bill" // false
 */
export const palindromeChecker = (str: string): boolean => {
  return (
    joinWords(str).toLowerCase() === reverseString(joinWords(str)).toLowerCase()
  );
};
