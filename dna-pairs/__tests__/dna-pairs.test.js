const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  //return arr
  test('should return an array', () => { 
    expect(Array.isArray(dnaPairs())).toBe(true)
   })
  //return empty array if no string/no arr
  test('should return empty array if passed an empty string or no parameter', () => {
    expect(dnaPairs()).toEqual([])
    expect(dnaPairs('')).toEqual([])
  });
  //return arr should have same length as string
  test('should return array of same length of string passed ', () => {
    expect(dnaPairs("G")).toHaveLength(1)
  })
  //should return an array of arrays each containing dna pairs
  test('should return an array of arrays each containing dna pairs', () => { 
    expect(dnaPairs("G")).toEqual([ ["G", "C"] ])
    expect(dnaPairs("AG")).toEqual([ ["A", "T"], ["G", "C"] ])
    expect(dnaPairs("ATAG")).toEqual([ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ])
   }) 
   // should not mutate input str
   test('should not mutate input', () => { 
    let str ='AG'
    let strCopy = str
    dnaPairs(str)

    expect(str).toBe(strCopy)
    })
});

