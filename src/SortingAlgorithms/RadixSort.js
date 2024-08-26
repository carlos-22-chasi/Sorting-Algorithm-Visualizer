// radixsort
// Function to generate animations for QuickSort
export function getRadixSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Call radixsort function to sort the array and generate animations
  radixSort(auxiliaryArray, animations);
  return animations;
}

// Function to perform radixSort and generate animations
function radixSort(mainArray, animations) {
  // Find the maximum number to know number of digit places
  const maxNumber = getMax(mainArray);
  // Create a shallow copy where the sorted values will be kept
  let sortedArr = [...mainArray];

  // Do counting sort for every digit place. exp is passed.
  // exp is 10^i where i is current digit place
  for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
    //// Perform counting sort on the current digit place and captures animations
    const sortedIteration = countSort(sortedArr, exp, animations);
    sortedArr = sortedIteration;
  }
}

// A function to do counting sort of arr[] according to the digit represented by exp.
function countSort(mainArray, exp, animations) {
  const length = mainArray.length;
  let sorted = Array(length);
  console.log("output: ", sorted);
  //initialize count array to all zeros. This will count the amount of times we see each digit between 0-9
  let count = Array(10).fill(0, 0);
  console.log("count: ", count);

  // Store count of occurrences in count[]
  for (let i = 0; i < length; i++) {
    // Get the digit of the current place value were loooking at 
    const digit = Math.floor(mainArray[i] / exp) % 10;
    animations.push(["check", i]);
    animations.push(["uncheck", i]);
    // Increment the amount of times we count this digit. count[i] now contains the number of elements equal to i
    count[digit]++;
  }

  // Change count[i] so that count[i] now contains actual position of this digit in output[]
  // count[i] now contains the number of elements less than or equal to i. 
  for (let i = 1; i < 10; i++) {
  // We determine for each i = 0-9 how many input elements are less than or equal to i by keeping the running sum of count[]
    count[i] += count[i - 1];
  }

  // Build the sorted array
  for (let i = length - 1; i >= 0; i--) {
    // Get the digit of the current place value were loooking at 
    const digit = Math.floor(mainArray[i] / exp) % 10;
    // Find the index that this digit will be place into the sorted array
    const newIndex = count[digit] - 1;
    sorted[newIndex] = mainArray[i];
    animations.push(["overwrite", newIndex, mainArray[i]]);
    // Decrement the amount of times we see this digit. This decrement ensures that each successive element with the same digit is placed in the correct position without overwriting any previous placements
    count[digit]--;
  }
  return sorted;
}

// Uility function to get maximum value in an array
function getMax(arr) {
  const length = arr.length;
  let max = arr[0];
  for (let i = 1; i < length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
