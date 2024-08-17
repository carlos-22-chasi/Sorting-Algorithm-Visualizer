//selection sort
// Function to generate animations for Selection Sort
export function getSelectionSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Perform the Selection Sort algorithm and generate animations
  selectionSort(auxiliaryArray, animations);
  // Return the list of animations to be used for visualization
  return animations;
}

// Function to perform Selection Sort and generate animations
function selectionSort(mainArray, animations) {
  // Loop through the array
  for (let i = 0; i < mainArray.length - 1; i++) {
    let iMin = i;
    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < mainArray.length; j++) {
      // Push comparison animation
      animations.push(["compare", j, iMin]);
      // Push revert animation 
      animations.push(["revert", j, iMin]);
      // If current index is less than iMin, update iMin
      if (mainArray[j] < mainArray[iMin]) {
        iMin = j;
      }
    }
    // Swap the found minimum element with the current element
    if (iMin !== i) {
      animations.push(["swap", i, mainArray[iMin], iMin, mainArray[i]]);
      swap(mainArray, i, iMin);
    }
  }
}

// Utility function to swap two elements in the array
function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

