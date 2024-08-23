//combsort
// Function to generate animations for QuickSort
export function getCombSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Call the recursive quicksort function to sort the array and generate animations
  combsort(auxiliaryArray, animations);
  return animations;
}

// Function to perform CombSort and generate animations
function combsort(mainArray, animations) {
  // initialize gap
  const n = mainArray.length;
  let gap = n;

  // Initialize swapped as true to make sure that loop runs
  let swapped = true;

  // Keep running while gap is more than 1 and last iteration caused a swap
  while (gap !== 1 || swapped === true) {
    // Find next gap
    gap = getNextGap(gap);

    // Initialize swapped as false so that we can check if swap happened or not
    swapped = false;

    // Compare all elements with current gap
    for (let i=0; i < n - gap; i++) {
      // Push comparison animation 
      animations.push(["compare", i, i + gap]);
      // Push revert animation 
      animations.push(["revert", i, i + gap]);

      if (mainArray[i] > mainArray[i+gap]) {
         // Push swap animation (swap the elements in the array)
          animations.push(["swap", i, mainArray[i+gap], i + gap, mainArray[i]]);
          swap(mainArray, i, i + gap);
          swapped = true;
      }
    }
  }
}

  // Utility function to find gap between elements
function getNextGap(gap){
  // Shrink gap by Shrink factor
  gap = parseInt((gap*10)/13, 10);
  if (gap < 1)
      return 1;
  return gap;
}
// Utility function to swap two elements in the array
function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}
