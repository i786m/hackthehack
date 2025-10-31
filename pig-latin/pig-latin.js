function pigLatin(str) {
  if (typeof str !== 'string' || str.trim() === '') return '';

  return str
    .toLowerCase()
    .split(' ')
    .filter(word => word.trim() !== '')
    .map(word => {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      if (vowels.includes(word[0])) {
        // If the word starts with a vowel, add "way" to the end
        return word + 'way';
      } else {
        const firstVowelIndex = word.search(/[aeiou]/);
        if (firstVowelIndex === -1) return word + 'ay';
        return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
      }
    })
    .join(' ');
}

module.exports = pigLatin;
