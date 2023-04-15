/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, max = 0) {
  //base case
  if (words.length === 0) return max
  
  if (max < words[0].length) {
    max = words[0].length
  } 
  return longest(words.slice(1), max)
  }



/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return ''
  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return
  if (str[0] === str[str.length - 1]) {
    isPalindrome(str.slice(1,str.length - 1))
    return true
  }
  return false
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, n = 0) {
  if (n < arr.length ) {
    if (arr[n] === val) return n
    return findIndex(arr, val, n+1)
  } else return -1 
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, copy = '') {
  if (str.length === 0) return copy

  copy = copy + str[str.length - 1]
  return revString(str.slice(0,str.length - 1), copy)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, total = 0) {
  if (arr.length === 0) return -1
  let idx = Math.floor(arr.length / 2)
  if (arr[idx] === val) return idx + total
  if (arr[idx] < val) {
    //amount of elements before slicing
    total = total + idx + 1
    return binarySearch(arr.slice(idx+1), val, total)
  }
  else return binarySearch(arr.slice(0, idx), val)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
