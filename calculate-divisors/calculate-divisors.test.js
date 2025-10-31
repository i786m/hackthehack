const calculateDivisors = require('./calculate-divisors');

describe('CalculateDivisors', () => { 

    test('should return a number', () => {
        const test = calculateDivisors(4)
        expect(typeof test).toBe('number');
    });

    test('should return a 0 if passed 1 or 0', () => {
        const test = calculateDivisors(4)
        expect(typeof test).toBe('number');
    });
    test('should return 0 if passed a number under 4', () => {
        const test = calculateDivisors(2)
        expect(test).toBe(0);
    });
    test('should return 3 if passed 4 or 5', () => {
        expect(calculateDivisors(4)).toBe(3);
        expect(calculateDivisors(5)).toBe(3);
    });
    test('should return sum of multiples of 3 and multiples of 5 from 0 to the number passed (not included)', () => {
        expect(calculateDivisors(10)).toBe(23);
        expect(calculateDivisors(12)).toBe(33);
    });
 })