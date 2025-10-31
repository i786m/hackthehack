function rotateArray(arr, num) {
  if (!Array.isArray(arr) || arr.length === 0) return arr;

  // Normalize num to stay within bounds of array length
  const rotations = ((num % arr.length) + arr.length) % arr.length;

  // Perform rotation
  return arr.slice(-rotations).concat(arr.slice(0, -rotations));
}

module.exports = rotateArray;
