//* Given an array, find the largest sum of subarray

const nums = [1, 2, -3, 6, -2, 9, 8, 3, -1, -4];

// Time : O(n^2)
function largeSum(arr) {
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // n
    let currSum = 0;
    for (let j = i; j < arr.length; j++) {
      // n / n-1/ n-2
      currSum = currSum + arr[j];
      if (currSum >= maxSum) {
        maxSum = currSum;
      }
    }
  }

  return maxSum;
}

// console.log(largeSum(nums));

// using kadane's algo

function maxSum(arr) {
  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

console.log(maxSum(nums));
