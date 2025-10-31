// DNA Pairs
// Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.

// Examples
// Here are some examples below.

// dnaPair("G");
// // should return [ ["G", "C"] ]
// dnaPair("AG");
// // should return [ ["A", "T"], ["G", "C"] ]
// dnaPair("ATAG");
// // should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here
  if(!dna||dna.length===0) return []
  return dna
          .split('')
          .map(e=>[e,e==='G'?'C':e==='A'?'T':'A'])
}

module.exports = dnaPairs;
