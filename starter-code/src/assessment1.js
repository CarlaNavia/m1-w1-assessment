// Write a function that returns the product of 2 numbers
function product(x, y) {
    if (x < y) {
      return product(y, x); 
    } else if (y != 0) {
      return (x + product(x, y - 1)); 
    } else {
      return 0; 
    }
  }

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num%2===0){
    return true
  } else {
    return false
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a
  } else {
    return b
  } 
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let max_val = 0;
  if (a > b) {
    return a
  } else if (b > a) {
    return b
  } else if (c > max_val) {
    return max_val;
  }
} 

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = numbers.reduce(function(a,b) {
    return a + b 
  }, 0)
  return sum
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
    return numbers.reduce(function (acc, curr) {
      if (acc > curr)
      return acc
    } else if (curr < acc) {
      return curr
    }
  }

// Return the longest string in an array
function longestString(strings) {
  let count = ""
  for(let i=0; i<strings.length; i++) {
    count.push(strings[i].length);
  } return count
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i=0; i<wordsArr.length; i++) {
    if (wordsArr[i]===word) {
      return true;
    } else {
    return false
  }
}
}
// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {

} 
