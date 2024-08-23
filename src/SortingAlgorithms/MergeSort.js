//mergesort 
// Function to generate animations for MergeSort
export function getMergeSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create two copies of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  const mainArray = array.slice();
  // Call the recursive mergesort function to sort the array and generate animations
  mergeSortHelper(mainArray, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  // Find the middle index of the array
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  // Recursively divide the left side of the array into smaller parts 
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  // Recursively divide the right side of the array into smaller parts 
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  // Sorts the main array and auxilliary array
  merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  // Merge the two halves while capturing the animation steps
  while (i <= middleIdx && j <= endIdx) {
    // These are the indexes that we're comparing; we push them once to change their color.
    animations.push(["compare", i, j]);
    // These are the indexes that we're comparing; we push them a second time to revert their color.
    animations.push(["revert", i, j]);

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // Overwrite the value in the main array with the value from the auxiliary array
        animations.push(["overwrite", k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    } else {
        // Overwrite the value in the main array with the value from the auxiliary array
        animations.push(["overwrite", k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
  }

  // Handle remaining elements in the left half
  while (i <= middleIdx) {
    // These are the indexes that we're comparing; we push them once to change their color.
    animations.push(["compare", i, i]);
    // These are the indexes that we're comparing; we push them a second time to revert their color.
    animations.push(["revert", i, i]);
    // Overwrite the value in the main array with the value from the auxiliary array
    animations.push(["overwrite", k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }

  // Handle remaining elements in the right half
  while (j <= endIdx) {
    // These are the indexes that we're comparing; we push them once to change their color.
    animations.push(["compare", j, j]);
    // These are the indexes that we're comparing; we push them a second time to revert their color.
    animations.push(["revert", j, j]);
    // Overwrite the value in the main array with the value from the auxiliary array
    animations.push(["overwrite", k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
