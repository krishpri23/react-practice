const nums = [1, 2, 3, 4];
function multiplyArr(arr) {
  let result = 1;

  for (let index = 0; index < arr.length; index++) {
    result = result * arr[index];
  }

  return result;
}
// console.log(multiplyArr(nums));

// Write in recursion

// function recursionMultiply(arr, index) {
//   if (index === arr.length) return 1;

//   return arr[index] * recursionMultiply(arr, index + 1);
// }

// console.log(recursionMultiply(nums, 0));

function recursionMultiply(arr) {
  if (arr.length <= 0) {
    return 0;
  }

  //   last el * recursion fn
  return arr[arr.length - 1] * recursionMultiply(arr.slice(0, arr.length - 1));
}

recursionMultiply(nums);

function factorial(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// console.log(factorial(5));

//* create array with range of numbers. start=0,end=4
// filling the array with values
function rangeArr(start, end) {
  if (start === end) {
    return [];
  } else {
    const numbers = rangeArr(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}

console.log(rangeArr(0, 4));

// * palindrome

function palindrome(num) {
  if (num.length <= 1) {
    return 1;
  }
}

console.log(palindrome(121));
