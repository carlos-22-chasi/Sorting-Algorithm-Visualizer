//heapsort
// Function to generate animations for HeapSort
export function getHeapSortAnimations(array) {
  const animations = [];
  // If the array has one or fewer elements, no sorting is needed
  if (array.length <= 1) return array;
  // Create a copy of the array to avoid mutating the original array during sorting
  const auxiliaryArray = array.slice();
  // Perform the heapsort algorithm and generate animations
  heapSort(auxiliaryArray, animations);
  // Return the list of animations to be used for visualization
  return animations;
}

// Function to perform heapSort and generate animations
function heapSort(mainArray, animations) {
  const length = mainArray.length;
  // Build the max heap
  buildMaxHeap(mainArray, length, animations);
  for(let i = length - 1; i > 0; i--){
    // i keeps track of the amount of items unsorted
    animations.push(["swap", 0, mainArray[i], i, mainArray[0]]);
    //swap highest item (at index 0) with item at the end of the unsorted array
    swap(mainArray, 0, i);
    // After swapping, max-heap property might be violeted. Restore property using heapify
    heapify(mainArray, 0, i, animations);
  }
}

// Helper function to build a max heap from an array
function buildMaxHeap(arr, heapSize, animations){
  //Start from the last non-leaf node and heapify each node up to the root
  for(let i = Math.floor(heapSize / 2) - 1; i >= 0; i--){
    heapify(arr, i, heapSize, animations);
  }

}

// Utility function to maintain the max heap property of a subtree
function heapify(arr, index, heapSize, animations){
  const left = (2 * index) + 1; // Index of the left child
  const right = (2 * index) + 2; // Index of the right chile
  let largest = index;
  // Check if left child exists and is greater than the current largest value
  if (left < heapSize && arr[left] > arr[largest]){
    largest = left;
  }
  // Check if right child exists and is greater than the current largest value
  if (right < heapSize && arr[right] > arr[largest]){
    largest = right;
  }
  // If the largest value is not at the current index, swap with largest value and continue heapifying
  if(largest !== index){
    animations.push(["swap", index, arr[largest], largest, arr[index]]);
    swap(arr, index, largest);
    // Recursively heapify the affected subtree
    heapify(arr, largest, heapSize, animations);
  }
}

// Utility function to swap two elements in the array
function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}


