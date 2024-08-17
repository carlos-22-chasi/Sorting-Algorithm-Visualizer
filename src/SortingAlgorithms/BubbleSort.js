//bubblesort
// Function to generate animations for BubbleSort
export function getBubbleSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Perform the BubbleSort algorithm and generate animations
  bubblesort(auxiliaryArray, animations);
  // Return the list of animations to be used for visualization
  return animations;
}

// Function to perform BubbleSort and generate animations
function bubblesort(mainArray, animations) {
  // Outer loop for multiple passes through the array
  for (let i = 0; i < mainArray.length; i++) {
    // Inner loop for comparing adjacent elements
    for (let j = 0; j < mainArray.length - i - 1; j++) {
      // Push comparison animation 
      animations.push(["compare", j, j + 1]);
      // Push revert animation 
      animations.push(["revert", j, j + 1]);
      // If the current element is greater than the next element, swap them
      if (mainArray[j] > mainArray[j + 1]) {
        // Push swap animation (swap the elements in the array)
        animations.push(["swap", j, mainArray[j + 1], j + 1, mainArray[j]]);
        // Perform the swap operation
        swap(mainArray, j, j + 1);
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
