function sortArrayByProximityTo5(arr) {
  // Custom sorting function
  arr.sort((a, b)=> {
    var diffA = Math.abs(a - 5); // Absolute difference from 5 for element a
    var diffB = Math.abs(b - 5); // Absolute difference from 5 for element b

    // If the differences are the same, sort based on the element's value
    if (diffA === diffB) {
      return a - b;
    }

    // Sort based on the difference from 5
    return diffA - diffB;
  });

  return arr;
}

// Example usage
var input = [1, 3, 5, 7, 9];
var output = sortArrayByProximityTo5(input);
console.log(output);





var accounts = [[5, 4, 7, 2, 6],[1,-7,8]
]
function maxArr(arr) {
  let max  =0;
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
      if(arr[i][j]>max) {
        max = arr[i][j]
      }
    }
  }
  return max
}

const maxmum = maxArr(accounts)
console.log(maxmum)


function dv(num) {
  let rem = num % 69;
  console.log(rem)
  if(rem===0) {
    return 0
  } else {
    return 69-rem
  }
  
}

const c = dv(123)
console.log(c)




function countMaxmum(arr) {
  
  let maxCount = 0;
  let maxFreq = arr[0]
  for(let i=0; i<arr.length; i++) {
    let count=0
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i]===arr[j]) {
         count++
      }
    }
    
    if(count>maxCount) {
       maxCount= count
      maxFreq = arr[i]
    }
    
  }
  return maxFreq
}

const f = [10,8,10,8,8,8,3,2]

const e = countMaxmum(f)
console.log(e)











 


function arrTarget(arr,target) {
  let left =0;
  let right= arr.length-1
  while(left<=right) {
    let mid = Math.floor((left+right)/2) 
    if(arr[mid]===target) {
      return mid
    }
    else if(target>arr[mid]) {
      right= mid -1 
    } else {
      left= mid +1
    }
  }
  return -1
}


var jake = arrTarget([9,5,3, 2,1],3)

console.log(jake)




function printPromise() {
  return new Promise(function(resolve,reject){
    console.log("Hello worls")
    resolve()
  })
}


function printPromise() {
  return new Promise(function(resolve,reject){
    console.log("Hellow world")
    resolve()
  }) 
}

printPromise().then(function(response){
  console.log("promise resolved")
}).catch((error)=>{
  console.log("error")
})


const promse = new Promise(function(resolve,reject){
  
  setTimeout(()=> {
    var random = Math.random()
    if(random>0.5) {
     resolve(random)
    } else {
      reject(random)
    }
  }, 10);
  
})

promse.then((result)=>{
  console.log("Promise resolved sucesss", result)
}).catch((error)=>{
  console.log(error)
})


var isValid = function(s) {
    
    var reverseChar = s.split('').reverse().join('');
    if(s===reverseChar) {
        return true;
    } else {
        return false;
    }
    
    
    
};
const  word = "madam"
const isValidaa = isValid(word)

console.log(isValidaa)




function jakeer(nums) {
  
  for(let i=0; i<nums; i++) {
    let char = "" 
 for(let j=0; j<i; j++) {
   char = char+ "*"
 }
 console.log(char)
  }
  
  for(let i=nums; i>=1; i--) {
    let char  = ""
    for(let j=i; j>=1; j--) {
      char = char + "*"
    }
    console.log(char)
  }
  
  
}

jakeer(5)


var mostWordsFound = (sentences) =>{
    
     const jds = Math.max(...sentences.map((x) => x.split(" ").length));
    console.log(jds)
    return jds
    
};
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))




const armstrong = (n) =>{
  const digits = n.toString()
  const digitsNum = digits.length;
  let sum = 0
  console.log(digits)
  for(let i=0; i<digitsNum; i++) {
    const jj = parseInt(digits.charAt(i))
   
   sum = sum + Math.pow(jj,digitsNum)
   console.log(sum)
  }
  if(n===sum) {
    console.log("armstrong")
  } else {
    console.log("Not Armstrong")
  }
}

console.log(armstrong(153))



const printDigits = (n) => {
  const digtss = n.toString()
  
  for(let i=0; i<digtss.length; i++) {
    const ddd = parseInt(digtss.charAt(i))
    console.log(ddd)
  }
  
  
}

console.log(printDigits(652))



const series = (n) => {
  
for(let i=0; i<n; i++) {
  if(i%5!==0) {
    console.log(i)
  }
}
  
  
}
console.log(series(20))
















const printPromise = () => {
  return new Pro
}