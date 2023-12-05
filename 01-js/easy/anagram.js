/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // if length of str1 and str2 are not equal, return false
  if (str1.length !== str2.length) {
    return false;
  }
  // convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // create a character map for str1
  let charMap1 = {};
  for (let char of str1) {
    charMap1[char] = charMap1[char] + 1 || 1;
  }
  // keep subtracting the count of characters of str2 from charMap1
  for (let char of str2) {
    if (!charMap1[char]) {
      return false;
    }
    charMap1[char]--;
    if (charMap1[char] < 0) {
      return false;
    }
  }
  return true;

}

module.exports = isAnagram;
