const getTweetData = require('./get-tweet-data');

// should return empty object if passed an empty/no string 
test('should return empty object if passed an empty/no string', ()=>{
    expect(getTweetData()).toEqual({})
    expect(getTweetData('')).toEqual({})
  })
//should return object with appropriate properties 
    test('should return object with tags property', () => { 
      expect(getTweetData('string').hasOwnProperty('tags')).toBe(true)
     })
     test('should return object with mentions property', () => { 
        expect(getTweetData('string').hasOwnProperty('mentions')).toBe(true)
     })
     test('should return object with tagCount property', () => { 
        expect((getTweetData('string')).hasOwnProperty('tagCount')).toBe(true)
     })
     test('should return object with mentionCount property', () => { 
        expect((getTweetData('string')).hasOwnProperty('mentionCount')).toEqual(true)
     })
     test('should return object with length property', () => { 
        expect((getTweetData('string')).hasOwnProperty('length')).toBe(true)
     })
     test('should return object with length of the string passed as the value for length property', () => {
      expect(getTweetData('string').length).toBe(6);
      expect(getTweetData('str').length).toBe(3)
     });

     test('should return object with the frequency of @  as the value for mentionsCount', () => {
      console.log(getTweetData('@john'))
      expect(getTweetData('@john').mentionCount).toBe(1);
      expect(getTweetData('@sam @dave').mentionCount).toBe(2)
     });

     test('should return object with the frequency of #  as the value for tagCount', () => {
      expect(getTweetData('@john').tagCount).toBe(0);
      expect(getTweetData('#js #dev').tagCount).toBe(2)
     });

//   //should return an object containing data from a given tweet

test('should return an object containing data from a given tweet', () => {
    expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 
    })
    expect(getTweetData("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 })
    expect(getTweetData("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 })
    expect(getTweetData("My awesome tweet about #coding to @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 })
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 })
    })

//     //should not mutate original string
// test('should not mutate the original str', () => { 
//     let str = 'hello' , strCopy = str
//     getTweetData(str)
//     expect(str).toBe(strCopy)
