function sentenceToCamelCase(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') return '';

  return sentence
    .toLowerCase()                     // make everything lowercase
    .split(' ')                        // split by spaces
    .filter(word => word.trim() !== '') // remove extra spaces
    .map((word, index) => {
      if (index === 0) return word;    // first word stays lowercase
      return word.charAt(0).toUpperCase() + word.slice(1); // capitalize first letter of next words
    })
    .join('');
}

module.exports = sentenceToCamelCase;
