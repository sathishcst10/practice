
const { describe, expect, test } = require('@jest/globals');
const { firstNonRepeatedChar, flattenReduce, countWords, firstRepeatedElement, countWord, factorial } = require('./index');

describe('firstNonRepeatedChar', () => {
    test('it must return i', () => {
        expect(firstNonRepeatedChar('aabbccddeeffgghhi')).toBe('i');
    });

    test('return [1,2,3,4,5]', () => {
        expect(flattenReduce([1, 2, [3, [4]], 5])).toStrictEqual([1, 2, 3, 4, 5])
    });

    test('adding positive number is not zero', () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    })
    test('there is stop', () => {
        expect('christoph').toMatch('stop')
    });

    test('result must {hello : 2, world:1}', () => {
        expect(countWords("hello world hello")).toStrictEqual({ hello: 2, world: 1 });
    });

});

test('First repeated Element', () => {
    expect(firstRepeatedElement([1, 2, 2, 3, 4, 5, 1, 2, 4, 6])).toBe(2);
})

test('Count given word from the string', ()=>{
    expect(countWord("Sathishkumar Durairaj",'a')).toBe(4);
});

test('Factorial example', ()=>{
    expect(factorial(5)).toBe(120);
})