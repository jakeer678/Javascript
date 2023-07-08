var findDuplicate = function (nums) {
  let duplicate = nums.sort((a, b) => a - b);
  for (let i = 0; i < duplicate.length; i++) {
    for (let j = 0; j < duplicate.length; j++) {
      if (duplicate[j] === duplicate[j + 1]) {
        return duplicate[j];
      }
    }
  }
};

console.log(findDuplicate([3, 1, 3, 4, 2])); //output 3

//reverse an array

const reverseArray = (arr) => {
  let reverse = arr.reverse();
  return reverse;
};

console.log(reverseArray([1, 2, 4, 5, 6, 8])); //[ 8, 6, 5, 4, 2, 1 ]

//using for loop
const reverseaArr = (arr) => {
  const reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};

console.log(reverseaArr([1, 2, 4, 5, 6, 8]));

//Contains Duplicate if Contains return true

const containsDuplicate = (arr) => {
  let duplicateCon = arr.sort((a, b) => a - b);
  console.log(duplicateCon);

  for (let i = 0; i < duplicateCon.length; i++) {
    if (duplicateCon[i] === duplicateCon[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 4, 5, 6, 5])); // true

//Concatenation of Array

const nums = [1, 2, 1];

let concotenate = [...nums, ...nums];
console.log(concotenate); //[ 1, 2, 1, 1, 2, 1 ]

const conca = nums.concat(nums); //[ 1, 2, 1, 1, 2, 1 ]
console.log(conca);

//shaffle an Array

const shaffleArray = (nums, n) => {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[i + n]);
  }
  return res;
};
console.log(shaffleArray([2, 5, 1, 3, 4, 7], 2));

//Search in Rotated Sorted Array

// const searchSortedArray = (arr, target) => {

//   let left = 0;
//   let right = arr.length-1;
//   while(left<right) {
//     let mid = Math.floor((left+right)/2)

//     if(arr[mid]===target) {
//       return mid
//     } else if(target>arr[mid]) {
//       left = mid -1
//     } else {
//       right = mid +1
//     }

//   }
//   return -1
// }

// console.log(searchSortedArray([4,5,6,7,0,1,2],2))

//Reverse Words in a String

const str = "the sky is blue";

reverseWords = str.split(" ");

const c = reverseWords.reverse().join(" ");

console.log(c);

// Check if the Sentence Is Pangram=>A pangram is a sentence
//where every letter of the English alphabet appears at least once.





// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

function checkIfPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let char of alphabet) {
    if (!sentence.includes(char)) {
      return false;
    }
  }

  return true;
}
checkIfPangram("thequickbrownfoxjumpsoverthelazydog")


// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6


function maxWords(sentences) {
  let maxCount = 0;

  for (let sentence of sentences) {
    const words = sentence.split(" ");
    const wordCount = words.length;
    maxCount = Math.max(maxCount, wordCount);
  }

  return maxCount;
}

maxWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])



// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s) {
  // Clean the string by removing non-alphanumeric characters and converting to lowercase
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the clean string is a palindrome
  const reversedString = cleanString.split('').reverse().join('');
  return cleanString === reversedString;
}



// S = aabb
// Output:  ab 
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// Similiar explanation for b at
// 4th position.

function removeConsecutive(s) {
  const stack = "";

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 === s[i]) {
      continue
    } else {
      stack = stack +s[i]
    }
  }

  return stack.join('');
}
removeConsecutive()


// Longest Common Prefix
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
