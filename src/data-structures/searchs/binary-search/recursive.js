function binarySearch(vector = [], left, right, value) {
  if (right >= left) {
    // ex: 0 + Math.floor((4 - 0) / 2) or parseInt(0 + (4 - 0) / 2)
    const index = left + Math.floor((right - left) / 2); // get index is like middle
    if (vector[index] === value) {
      return value;
    }

    if (vector[index] > value) {
      return binarySearch(vector, left, index - 1, value);
    }

    return binarySearch(vector, index + 1, right, value);
  }
  return -1;
}

function main() {
  const vector = [1, 2, 3, 4, 5]; // ordered vector
  const value = 9;
  const left = 0;
  const right = vector.length - 1;
  const searchResult = binarySearch(vector, left, right, value);
  console.log("result: ", searchResult);
}

main();
