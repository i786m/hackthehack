const rotateArray = require('./rotateArray');

describe('rotateArray', () => {
  test('rotates array to the right by given number', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  test('rotates array to the left when number is negative', () => {
    expect(rotateArray([1, 2, 3, 4, 5], -2)).toEqual([3, 4, 5, 1, 2]);
  });

  test('rotation count larger than array length', () => {
    expect(rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]);
  });

  test('returns same array when rotation is 0', () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('returns empty array when input is empty', () => {
    expect(rotateArray([], 3)).toEqual([]);
  });

  test('handles single element array', () => {
    expect(rotateArray([42], 10)).toEqual([42]);
  });
});