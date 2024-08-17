//quicksort
// Function to generate animations for QuickSort
export function getQuickSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Call the recursive quicksort function to sort the array and generate animations
  quicksort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
  return animations;
}

// Recursive function to perform QuickSort and generate animations
function quicksort(mainArray, startIdx, endIdx, animations) {
  // Base case: If the start index is less than the end index, continue sorting
  if (startIdx < endIdx) {
    // Partition the array and get the index of the pivot element after partitioning
    const pivotIdx = partition(mainArray, startIdx, endIdx, animations);
    // Recursively sort the elements before the pivot
    quicksort(mainArray, startIdx, pivotIdx - 1, animations);
    // Recursively sort the elements after the pivot
    quicksort(mainArray, pivotIdx + 1, endIdx, animations);
  }
}

// Function to partition the array around a pivot element
// Elements less than the pivot go to the left, and elements greater go to the right
function partition(mainArray, startIdx, endIdx, animations) {
  // Choose the last element as the pivot
  const pivot = mainArray[endIdx];
  let i = startIdx - 1; // Index of the smaller element
  // Iterate through the array, comparing each element with the pivot
  for (let j = startIdx; j < endIdx; j++) {
    animations.push(["compare", j, endIdx]);
    animations.push(["revert", j, endIdx]);
    // If the current element is smaller than or equal to the pivot
    if (mainArray[j] <= pivot) {
      i++; // Move the smaller element index to the right
      // Push swap animation (swap the elements in the array)
      animations.push(["swap", i, mainArray[j], j, mainArray[i]]);
      // Swap the elements in the array
      swap(mainArray, i, j);
    }
  }
  // After the loop, place the pivot in its correct position in the array
  animations.push(["swap", i + 1, mainArray[endIdx], endIdx, mainArray[i + 1]]);
  // Perform the final swap to position the pivot correctly
  swap(mainArray, i + 1, endIdx);
  // Return the index of the pivot element
  return i + 1;
}

// Utility function to swap two elements in the array
function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}
