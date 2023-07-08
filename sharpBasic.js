//Swap Two Variables a and b

const swapVariable = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  console.log("a value", a);
  console.log("b value", b);
};
swapVariable(3, 4);

//Largest among 2 numbers

const largestAmongTwoNum = (a, b) => {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
};
largestAmongTwoNum(3, 4);

//Largest among 3 numbers.

const largestAmongThreeNum = (a, b, c) => {
  if (a > b && a > c) {
    console.log("a is the largest", a);
  } else if (b > c && b > a) {
    console.log("b is the largest", b);
  } else {
    console.log("c is largest", c);
  }
};

largestAmongThreeNum(8, 4, 5);

// If Marks> =40 --> pass

// ELSE ---> fail

// Input:-

// Marks =52

// Ouput:-

// pass

const greaterMarks = (marks) => {
  let result = marks >= 40 ? "Pass" : "fail";

  console.log(result);
};
greaterMarks(50);

//Write a program to print the maximum of two numbers using
//Ternary operator.

const printMaxTwo = (a, b) => {
  let res = a > b ? a : b;
  console.log(res);
};
printMaxTwo(5, 8);

const switchStatemenet = (day) => {
  let dayName;
  switch (day) {
    case 1:
      dayName = "sunday";
      break;
    case 2:
      dayName = "Monday";
    default:
      dayName = "No valid day";
  }
  return dayName;
};

console.log(switchStatemenet(2));

//Even Numbers by using While loop

const evenNumbers = (n) => {
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
};

evenNumbers(20);

//Print the following series using while loop

// 1 4 9 16 25 36 …. n

// Input :-

// n = 49

// Output :-1

// 1

// 4

// 9

// 16

// 25

// 36

// 49

const seriesUsingWhileLoop = (n) => {
  let i = 1;
  while (i <= n) {
    let j = i * i;
    console.log(j);
    i++;
  }
};

seriesUsingWhileLoop(20);

// By using while loop and continue statement

// Print all number from 1 to n but then it should not be divisible by 5
// Example:-

// Input:-

// n=7

// output:-

// 1

// 2

// 3

// 4

// 6

// 7

const printAllNumExcept5 = (n) => {
  i = 1;
  while (i <= n) {
    if (i % 5 !== 0) {
      console.log(i);
    }
    i++;
  }
};

printAllNumExcept5(20);

// Write a program to print the digits of a number .

// Input:-

// N - 153 .

// output:-

// 3

// 5

// 1

function printDigits(number) {
  let digits = number.toString().split("");

  for (let i = digits.length - 1; i >= 0; i--) {
    console.log(digits[i]);
  }
}

// Example usage
// let N = 153;
// printDigits(N);

// Write a program to print whether a given
// number is an Armstrong number or not..

// (Armstrong number is a number in which all
// the sum of cubes of digits is equal to the number

// Example:-

// Input

// n=153

// Output

// true

const armstrongNum = (n) => {
  const digits = n.toString().split("");
  const digtLength = digits.length;
  console.log(digtLength);
  let sum = 0;
  for (let i = 0; i < digtLength; i++) {
    let d = Math.pow(parseInt(digits[i]), digtLength);
    sum = sum + d;
    console.log(d);
  }
  if (sum === n) {
    return true;
  } else {
    return false;
  }
};

console.log(armstrongNum(253));

// Write a program to return the reverse of a number

// Input

// n=123

// output

// 321

// let recerse = n.toString().split("").reverse().join("")
// console.log(recerse)

const reverseNum = (n) => {
  let dig = n.toString().split("");
  let arr = [];
  for (let i = dig.length; i > 0; i--) {
    let j = arr.push(i);
  }
  return arr.join("");
};
console.log(reverseNum(123));

// Write a program to print all odd numbers from 1 to n using for loops

const oddNum = (n) => {
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

oddNum(10);

// Print the following series using for loop:-

// 1,8,27,64,125,216,......n

// Input

// 125

// Output :-

// 1

// 8

// 27

// 64

// 125

const series = (n) => {
  for (let i = 0; i < n; i++) {
    // let ser = i*i**i
    const j = Math.pow(i, 3);

    console.log(j);
  }
};
series(10);

// Write a program to print even numbers
// from 1 to n except numbers which are divisible by 4.
// Use Continue statement to avoid printing.

// Input

// 10

// Output

// 2

// 6

// 10

const evenNum = (n) => {
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      if (i % 4 == 0) {
        continue;
      }
      console.log(i);
    }
  }
};
evenNum(20);

// Write a program to print all the numbers
// from 1 to n .If m is present in between the
// sequence then stop printing any other number and break out of the loop.

// Input :
// n = 10 m = 4
// Output :-
// 1
// 2
// 3

const PrintNum = (n, m) => {
  for (i = 1; i < n; i++) {
    if (i === m) {
      break;
    }
    console.log(i);
  }
};

PrintNum(10, 4);

// Print the following pattern using for loops

// *****

// ****

// ***

// **

// *

const printPatt = (n) => {
  for (let i = 5; i >= 1; i--) {
    let char = "";
    for (let j = 1; j <= i; j++) {
      char = char + "*";
    }
    console.log(char);
  }
};
printPatt(5);

const usingWhileLoop = (n) => {
  let i = 5;
  while (i >= 0) {
    let char = "";
    i--;
    let j = 0;
    while (j <= i) {
      char = char + "*";
      j++;
    }
    console.log(char);
  }
};
usingWhileLoop(5);

// *    *

// **   **

// ***  ***

// **** ****

// **********

const patternn = (n) => {
  for (let i = 0; i <= n; i++) {
    let char = "";
    for (let j = 0; j <= i; j++) {
      char = char + "*";
    }
    console.log(char);
  }
};
patternn(5);

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "  ";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// Example usage
let rows = 5;
printPattern(rows);

// *****

// ****

// ***

// **

// *

// *

// **

// ***

// ****

// *****

const usingWhileLo = (n) => {
  let i = 5;
  while (i >= 0) {
    let char = "";
    i--;
    let j = 0;
    while (j <= i) {
      char = char + "*";
      j++;
    }
    console.log(char);
  }

  let a = 1;
  while (a <= n) {
    let char = "";
    a++;
    let b = 1;
    while (b <= a) {
      char = char + "*";
      b++;
    }
    console.log(char);
  }
};

usingWhileLo(5);

//Storing Elements in Array

const StoringElem = (n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(StoringElem(10));

let array = [];
for (let i = 0; i < 5; i++) array[i] = i + 1;
console.log(array);
let arrr = [];
for (let j = 0; j < 5; j++) arr[j] = j + 1;
console.log(arrr);

//Given an array find the maximum in it and return it

const maximumArr = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(maximumArr([2, 5, 7, 9, 5]));

//Minimum element in an array

const miniMumArr = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log(miniMumArr([2, 5, 7, 9, 5]));

// Write a program to store first n prime numbers in an
// array . After storing return the array.
// Input:-

// n=5

// Output:- Return the output in the form of an array.

// 2

// 3

// 5

// 7

// 11

const storePrime = (n) => {
  let primeArr = [];
  let num = 2;

  while (primeArr.length < n) {
    let isPrime = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeArr.push(num);
    }
    num++;
  }
  return primeArr;
};
console.log(storePrime(10));

//Subarrays
// Input:-

// [1,2,3,4,5]

// Output:-

// 1

// 12

// 123

// 1234

// 12345

// 2

// 23

// 234

// 2345

// 3

// 34

// 345

// 4

// 45

// 5

const subArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let num = "";
    for (let j = i; j < arr.length; j++) {
      num = num + arr[j];
      console.log(num);
    }
  }
};

subArr([1, 2, 3, 4, 5]);

//selection sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxInd]) {
        maxInd = j;
        console.log(maxInd);
      }
    }
    let temp = arr[i];
    arr[i] = arr[maxInd];
    arr[maxInd] = temp;
  }
  return arr;
};

console.log(selectionSort([5, 8, 4, 1, 9]));

//insertion sort

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (j = i - 1; j > 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
};

console.log(insertionSort([1, 5, 4, 2, 8]));

//Write a program to sort the array in descending order using Bubble sort
// algorithm. After Sorting return the array.
// Note both the array and size is already given.
// Input:-
// [4,3,2,5,1]
// Output:-
// [5,4,3,2,1]

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([1, 5, 2, 7, 3]));

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

const sumOfOddLengthSubArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j = j + 2) {
      for (let k = i; k <= j; k++) {
        sum = sum + arr[k];
      }
    }
  }
  return sum;
};


console.log(sumOfOddLengthSubArray([1, 4, 2, 5, 3]));

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]

// Output: 6

// Explanation:

// 1st customer has wealth = 1 + 2 + 3 = 6

// 2nd customer has wealth = 3 + 2 + 1 = 6

// Both customers are considered
// the richest with a wealth of 6 each, so return 6.

// Maximum in 2D array

const maximum2Darray = (arr) => {
  let maxArr = 0;
  for (let i = 0; i < arr.length; i++) {
    let wealth = 0;
    for (let j = 0; j < arr[i].length; j++) {
      wealth = wealth + arr[i][j];
    }
    if (wealth > maxArr) {
      maxArr = wealth;
    }
  }
  return maxArr;
};

console.log(
  maximum2Darray([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

const findingSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log(findingSum([1, 2, 3, 5, 7]));

//Running sum

const runningSum = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  return arr;
};

console.log(runningSum([1, 2, 3, 5, 7]));

// Given an array find the maximum sum subarray.
// Return the maximum sum of the subarray.
// Input:-
// [5,2,-4,-5, 3,-1,2,3,1]
// Output:-
// 8

const maximumSubArr = (arr) => {
  let maxSub = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum < 0) {
      sum = 0;
    } else if (sum > maxSub) {
      maxSub = sum;
    }
  }

  return maxSub;
};

console.log(maximumSubArr([5, 2, -4, -5, 3, -1, 3, 1]));

//Count number of set bits

var hammingWeight = function (n) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    if (n & (1 === 1)) counter++;
    n >>= 1;
  }
  return counter;
};

console.log(hammingWeight(32));

//nums = [-1,0,3,5,9,12], target = 9
//. Binary Search
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

//A peak element is an element that is strictly
// greater than its neighbors.
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your
// function should return the index number 2.

const peakElement = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
console.log(peakElement([1, 2, 3, 1]));

// Two Sum

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

const maximumNum = (sentence) => {
  let maxInd = 0;
  let maxCount = 0;

  for (let i = 0; i < sentence.length; i++) {
    let count = sentence[i].match(/a/g).length;
    if (count > maxCount) {
      maxCount = count;
      maxInd = i;
    }
  }
  return maxInd;
};

console.log(
  maximumNum(["please wait", "money in my bank", "i have a lots of cars"])
);

//Given a 2D array find the maximum in it and return it

// Input:-
// Arr=[[5, 4, 7, 2, 6],[1,-7,8]]
// Output:-
// 8

const maxArr = (arr) => {
  let max = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  return max;
};

console.log(
  maxArr([
    [5, 4, 7, 2, 6],
    [1, -7, 8],
  ])
);

// Write a program to find
// the missing number that when add to it becomes divisible by 69.
// Input: 69
// Output: 0
// Explanation: If we add69+0 it can become divisible by 69.

const divsible = (num) => {
  let remainder = num % 69;
  if (remainder === 0) {
    return 0;
  } else {
    return 69 - remainder;
  }
};

console.log(divsible(123));

// An Array of Elements is given. Return the
// element being repeated maximum number of times.
// If there are more than one element whose
// occurrence is the same then you can return any of those element.
// lve it in 0(n) using Maps.
// Example 1:-
// Input:-
// Arr - [5,3,5,9,5,3, 2,1]
// Output:-
// 5

const duplicateRmove = (arr) => {
  let maxFreq = arr[0];
  let maxcount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxcount) {
      maxcount = count;
      maxFreq = arr[i];
    }
  }
  return maxFreq;
};

console.log(duplicateRmove([5, 3, 5, 9, 5, 3, 2, 1]));

// Given an array Containing Strings sort on the basis of
// number of character 'a' present. Return the sorted array
// Note if number of a is same then length will be given preference.
// Example 1:
// Input:-
// arr - ["vaibhav", "almanac" , "is" ,"fat", "button","aabaca"]
// Output:-
// ["aabaca", "almanac", "vaibhav", "fat", "button", "is"]

function sortByCharacterA(arr) {
  arr.sort(function (a, b) {
    const aCount = (a.match(/a/g) || []).length;
    const bCount = (b.match(/a/g) || []).length;

    if (aCount !== bCount) {
      return bCount - aCount; // Sort in descending order of 'a' count
    } else {
      return a.length - b.length; // Sort in ascending order of length
    }
  });

  return arr;
}

// Example usage:
const arr = ["vaibhav", "almanac", "is", "fat", "button", "aabaca"];
const sortedArr = sortByCharacterA(arr);
console.log(sortedArr);




const a = [1,4,2,3]
function duplicate(arr) {
  
  let sort = arr.sort()
  for(let i=0; i<sort.length; i++) {
    if(sort[i]===sort[i-1]) {
      return true
    }
  }
  return false
}

console.log(duplicate(a))





const ab = [1,4,2,3,5,2,3,3,5,5,5]
function duplicate(arr) {
  let array = []
  let sort = arr.sort()
  console.log(sort)
  for(let i=0; i<sort.length; i++) {
    if(sort[i]===sort[i-1]) {
    return true
    
    }
  }
  return false
  
}

console.log(duplicate(ab))





const searchElemet = (arr, element) => {
const a = arr.indexOf(element)
return a  
}

console.log(searchElemet([1,2,4,5,5],5)) //3





const checkTwoArray = (arr1, arr2) => {
 
  if(arr1.length!==arr2.length) {
    return false
  } 
  
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i]!==arr2[i]) {
      return false
      
    }
  }
  return true
   
  }
  
  console.log(checkTwoArray([1,2,5,4,7],[1,2,5,4,7]))
  
  
  
  

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"

// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"

// Output: 0
  var numJewelsInStones = function(jewels, stones) {
    
    const set = new Set(jewels.split(''));
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      count++;
    }
  }
  
  return count;
};

  







// Question: Write a function that calculates the factorial of a number recursively.
// Answer:

// javascript
// Copy code
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial(5); // Returns 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)





// Question: Write a function to check if a given number is prime.
// Answer:


function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



// Question: Implement a function to capitalize the first letter of each word in a sentence.
// Answer:


function capitalizeWords(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}

capitalizeWords('hello world'); // Returns 'Hello World'





const fibonacciSeries = (num) => {
  
  let ser = [0,1]
  for(let i=2; i<=num; i++) {
    let nums = ser[i-1] + ser[i-2]
    ser.push(nums)
  }
  
  return ser
}

console.log(fibonacciSeries(10))


function numJewelsInStones(J, S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) !== -1) {
      count++;
    }
  }

  return count;

}
const J = "aA";
const S = "aAAbbbb";

const numJewels = numJewelsInStones(J, S);
console.log(numJewels); // Output: 3
