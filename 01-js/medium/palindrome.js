/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// Notes:
// Source: https://www.codingbeautydev.com/blog/javascript-remove-special-characters-from-string
// The square brackets in the regular expression ([]) indicates a character class. Only characters that are enclosed in it will be matched.
// The ^ character at the beginning of the character class indicates a negated character class. 
// It matches any character that is not enclosed in the character class.
// If we don't pass a global flag (/g), only the first special character in the string will be matched and removed.

function filterString(str){
  newstr = str.replace(/[^a-z0-9]/g, '');
  return newstr;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = filterString(str);
  const size = str.length;
  console.log(size);
  // let half = Math.floor(size/2);
  for(let i = 0; i < size/2; i++){
    if(str[i] != str[size - i - 1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
