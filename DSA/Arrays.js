// run : node Arrays.js in the terminal

//* 1. Find the second largest number distinct form array

const arr = [1, 3, 5, 66, 44, 97, 23];
// ascending order
// const nums = arr.sort();
// console.log(nums.at(-2));

//! brute force approach
// Time : O(n) is for Set, O(n log n) is for sorting so the worst is O(nlogn)
function secondLargest(arr) {
  const numSet = Array.from(new Set(arr));
  const sortedArr = numSet.sort((a, b) => b - a);
  if (sortedArr.length >= 2) {
    console.log(sortedArr[1], "is the second largest number");
  } else return -1;
}

// secondLargest(arr);

// Best case scenario without js methods. Approach is assigning a new largest num to largest var and largest var value to second largest and goes on..
// [1, 3, 5, 66, 44, 97, 23];
// Time : O(n), Space: O(1)
function secondLargestOptimized(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      secondLargest = largest;
      largest = arr[index];
    } else if (arr[index] != largest && arr[index] > secondLargest) {
      secondLargest = arr[index];
    }
  }

  return secondLargest;
}
// console.log(secondLargestOptimized(arr));
// ----------------------------------------------------
//* 2. Rotate array K. Given an integer array num, rotate array to the right by k steps. k non - negative

// Input nums = [1,2,3,4,5,6,7] where k = 3 => nums =[5,6,7,1,2,3,4]
// approach : move the last el to 1st and repeat
const nums = [1, 2, 3, 4, 5, 6, 7];

function rotateArray(arr, k) {
  let size = arr.length;

  // k should be less than length of arr or else it wont work
  if (k > size) {
    k = k % size;
    console.log("inside check");
  }

  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);

  return nums;
}

// console.log(rotateArray(nums, 10));
// ----------------------------------------------------

//* approach : reverse the array, take the k steps and reverse it and reverse the remaining elements
function rotateArrayOptimized(arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
}

// nums = [1,2,3,4]
function reverse(nums, left, right) {
  // swap 1st and last el

  while (left < right) {
    const temp = nums[left];
    // increment/decrement after assignment
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimized(nums, 3));
// ----------------------------------------------------

//* 3. REmove duplicates from sorted arrays by not creating a new arrays ie. in-place and order of elements must be same
// output : display the length of unique elements

const dupNums = [0, 0, 1, 1, 4, 5, 6, 7, 7];
function removeDuplicate(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arr[index + 1]) {
      arr.splice(index + 1, 1);
      index--;
    }
  }

  return arr.length;
}

// console.log(removeDuplicate(dupNums));

// 2 pointer approach
function removeDuplicate1(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return arr.slice(0, i + 1);
}

console.log(removeDuplicate1(dupNums), "dup 2");
