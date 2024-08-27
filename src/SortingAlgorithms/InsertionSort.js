//insertion sort
// Function to generate animations for Insertion Sort
export function getInsertionSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Perform the Insertion Sort algorithm and generate animations
  insertionSort(auxiliaryArray, animations);
  // Return the list of animations to be used for visualization
  return animations;
}

// Function to perform Insertion Sort and generate animations
function insertionSort(mainArray, animations) {
  // Loop through the array starting from the second element
  for (let i = 1; i < mainArray.length; i++) {
    let j = i;
    animations.push(["compare", j - 1, j]);
    animations.push(["revert", j - 1, j]);
    // While loop to shift elements to the right position
    while (j > 0 && mainArray[j - 1] > mainArray[j]) {
      animations.push(["swap", j, mainArray[j - 1], j - 1, mainArray[j]]);
    
      // Perform the swap operation
      swap(mainArray, j, j - 1);
      // Decrement j to continue checking the previous elements
      j--;
      // adds animation to highlight comparing previous elements
      if (j > 0){
        animations.push(["compare", j - 1, j]);
        animations.push(["revert", j - 1, j]);
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
