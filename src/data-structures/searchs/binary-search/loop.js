function binarySearch(vector = [], value) {
  let left = 0;
  let right = vector.length - 1;
  let index;

  while (right >= left) {
    // ex: 0 + Math.floor((4 - 0) / 2) or parseInt(0 + (4 - 0) / 2)
    index = left + Math.floor((right - left) / 2); // get index is like middle

    if (vector[index] === value) {
      return vector[index];
    }

    if (vector[index] > value) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
  return -1;
}

function main() {
  const vector = [1, 2, 3, 4, 5]; // ordered vector
  const value = 2;
  const resultSearch = binarySearch(vector, value);

  console.log("result: ", resultSearch);
}

main();
