const updateRemoteStudents = require('./update-remote-students');

describe('updatRemoteStudents', () => { 
    test('should return an array', () => {
        const test =updateRemoteStudents([{test:'test'}])
        expect(typeof test).toBe('object');
    });

    test('should return array of objects each with a location property', () => {
        const test = updateRemoteStudents([{test:'test'}])
        expect(test[0].hasOwnProperty('location')).toBe(true);
    });

    test('should return array of objects with location property set to remote if no location listed', () => {
        const test = [{test:'test'}]
        const expected = [{test:'test',location:'remote'}]
        const actual = updateRemoteStudents(test)
        expect(actual).toEqual(expected);

        const test2 = [{test:'test',location:'london'}]
        const expected2 = [{test:'test',location:'london'}]
        const actual2 = updateRemoteStudents(test2)
        expect(actual2).toEqual(expected2);
        
    });   
    
    test('should not mutate the input arr', () => {
        const test = [{test:'test'}]
        const testCopy= test
        updateRemoteStudents(test)
        expect(test).toEqual(testCopy);
    });

    test("should return [{ name: 'Euler', age: 27, location: 'remote' }] when passed [{ name: 'Euler', age: 27 }]", () => {
        const test = [{ name: 'Euler', age: 27 }]
        const actual = updateRemoteStudents(test)
        const expected = [{ name: 'Euler', age: 27, location: 'remote' }]

        expect(actual).toEqual(expected);
    });

    test(`should return [
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22, location: 'remote' },
        { name: 'Tao', age: 47, location: 'manchester' }
      ] when passed in [
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22 },
        { name: 'Tao', age: 47, location: 'manchester' }
      ]`, ()=>{
        const test = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        const actual = updateRemoteStudents(test)
        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
      })
 })