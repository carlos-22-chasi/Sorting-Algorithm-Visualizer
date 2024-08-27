//bucketsort
// Function to generate animations for BucketSort
export function getBucketSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Call bucketsort function to sort the array and generate animations
  bucketSort(auxiliaryArray, animations);
  return animations;
}

// Function to perform BucketSort and generate animations
function bucketSort(mainArray, animations) {
  const length = mainArray.length;
  // Create length amount of buckets
  let buckets = Array(length);
   // Determine the maximum value in the array 
   const maxValue = Math.max(...mainArray);

  // Make bucket[i] an empty list
  for(let i = 0; i < length; i++){
    buckets[i] = [];
  }

  // Insert mainArray[i] in a bucket based on its place value
  for(let i = 0; i < length; i++){
    const bucketIndex = Math.floor((mainArray[i]/maxValue) * (length-1));
    buckets[bucketIndex].push(mainArray[i]);
  }

  // Animate how unsorted buckets looks
  let indexCounter = 0;
  for(let i = 0; i < buckets.length; i++){
    for(let j = 0; j < buckets[i].length; j++){
      animations.push(["overwrite", indexCounter, buckets[i][j]]); 
      indexCounter++;
    }
  }

  let sortedArray = [];
  let startIndex = 0;
  // Sort each bucket with insertion sort
  for(let i = 0; i < length; i++){
    if (buckets[i].length > 0){
      console.log(`buckets[${i}]: ${buckets[i]}`)
      insertionSort(buckets[i], startIndex, animations);
      // Concatenate each bucket to create the sorted list
      sortedArray = sortedArray.concat(buckets[i]);
      // Update startIndex to track where in the original array the sorted elements should go
      startIndex += buckets[i].length;
    }
  }
}

function insertionSort(mainArray, indexOffset, animations) {
  // Loop through the array starting from the second element
  for (let i = 1; i < mainArray.length; i++) {
    let j = i;
    animations.push(["compare", j - 1 + indexOffset, j + indexOffset]);
    animations.push(["revert", j - 1 + indexOffset, j + indexOffset]);
    // While loop to shift elements to the right position
    while (j > 0 && mainArray[j - 1] > mainArray[j]) {
      animations.push(["swap", j + indexOffset, mainArray[j - 1], j - 1 + indexOffset, mainArray[j]]);
      // Perform the swap operation
      swap(mainArray, j, j - 1);
      // Decrement j to continue checking the previous elements
      j--;
      if (j > 0){
        animations.push(["compare", j - 1 + indexOffset, j + indexOffset]);
        animations.push(["revert", j - 1 + indexOffset, j + indexOffset]);
      }
    }
  }
}

// Utility function to swap two elements in the array
function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

