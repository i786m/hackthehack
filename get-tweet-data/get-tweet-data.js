// Please do not change the name of this function
function getTweetData (tweet) {
  // Your code here
  if(!tweet||tweet==='')return {}
  else {
  let tags = [] , mentions = [] ,  words = tweet.split(' ')
  words.forEach(word => {
    if(word.startsWith('@')){
      !mentions.includes(word)&&mentions.push(word)
    }
    if(word.startsWith('#')){
      !tags.includes(word)&&tags.push(word)
    }
  });
  let tagCount = tags.length, mentionCount = mentions.length, length = tweet.length
  return {
    tags , mentions , tagCount, mentionCount , length
  }
};
}
module.exports = getTweetData;

/*The challenge is to implement a function which returns an object containing data from a given tweet.

We want easy access to the following data:

The length of the tweet.

The amount of hash tags ( #awesomeNorthcoders ) in the tweet as well as an array of them.

The amount of mentions ( @northcoders ) in the tweet as well as an array of them.

We only want to return unique hash tags and handles mentioned. */