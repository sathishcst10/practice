function firstNonRepeatedChar(str) {
    const count = {};
    for (let char of str) {
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char] = count[char] + 1;
        }
    }

    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }
    return null;
}

function flattenReduce(arr) {
    return arr.reduce((acc, item) =>
        Array.isArray(item) ? acc.concat(flattenReduce(item)) : acc.concat(item), []
    )
}

function countWords(str) {
    const words = str.trim().toLowerCase().split(/\s+/);
    const freq = {};

    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}

function firstRepeatedElement(arr) {

    const seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            return item;
        }
        seen.add(item);
    }
    return null;
}
// console.log(firstRepeatedElement([1, 2, 3, 4, 5, 2, 4, 5, 3, 2]));
// console.log(countWords("hello world hello"));
//console.log(flattenReduce([1,2,[3,[4]],5]));

function countWord(str, word) {
    let count = 0;
    for (let _word of str) {
        if (_word === word) {
            count++;
        }
    }
    return count;
}
//console.log(countWord('sathishkumar Durairaj', 'a'));



function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

//console.log(factorial(5));

function reverseString(str) {
    const _value = str.trim().split(' ');
    console.log(_value);
    return _value.reverse().join(' ');
    //return _value.map(word => word.split('').reverse().join('')).join(' ');
}

function reverseWords(str) {
    return str.trim().split(' ').reverse().join(' ');
}

//currying
function makeSandwich(bread){
    return function peanutButter(butter){
        return function jelly(jelly){
            return `${bread}-${butter}-${jelly}`
        }
    }
};

function rangeOfNumber(startNum, endNum){
    if(endNum < startNum){
        return [];
    }else{
        const numbers = rangeOfNumber(startNum, endNum-1);
        numbers.push(endNum);
        return numbers;
    }
}

function findMissingNumber(nums,n){
    const actualSum = (n)*(n+1)/2;
    const sum = nums.reduce((acc,curr)=>acc+curr,0);

    return actualSum - sum;
}

function findMissingValues(nums, n) {
    const missing = [];
    for (let i = 1; i <= n; i++) {
        if (!nums.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
}

function hasDuplicate(arr) {
    const seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            return true;
        }
        seen.add(item);
    }
    return false;
}

function isAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    const count = new Array(26).fill(0);
    for(let i=0; i<str1.length; i++){
        count[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[str2.charCodeAt(i) - 'a'.charCodeAt(0)--];
    }
    return count.every((val)=>val === 0);
}

function twoSum(nums, target){
   for(let i = 0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j];
            }
        }
        return [];
   }
}

function pushAllZeroLast(nums){
    const modifiedArray =[];
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[count++] = nums[i];
        }
    }

    while(count < nums.length){
        nums[count++] = 0;
    }
    return nums;
}


function findSecondLargestNum(arr){    
    if(arr.length < 2) return null;
    let first = -1, second = -1;

    for(let num of arr){
        if(num > first){
            second = first;
            first = num;
        } else if(num > second && num < first){
            second = num;
        }
    }
    return second === -1 ? null : second;
}

// Promise.resolve().then(()=>{
//     //console.log(findSecondLargestNum(["j",2,0,35,23,-1]));
//     try{
//         'ajs'.toFixed(2);
//     }catch(err){
//         throw new Error("Invalid input");
//     }
// }).catch((err)=>{
//     console.error(err);
// });
const promise3 = new Promise((resolve,reject)=>{
        setTimeout(reject, 0,'foo');
    })

Promise.allSettled([
    Promise.resolve(1),
    Promise.reject('2'),
    promise3
]).then((values)=>{
    console.log(values);
}).catch((err)=>{
    console.error(err);
});

function checkPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log("pal",checkPalindrome("madama"))

console.log(findSecondLargestNum([10,10,10]));
//console.log(pushAllZeroLast([0,2,3,0,4,5]));

//console.log("isAnagram", isAnagram('jam','maj'));

// console.log("multiple missing values",findMissingValues([1, 2, 4, 5, 6, 8, 10], 10));

// console.log("Missing Value", findMissingNumber([1,2,4,5],5));

// console.log(rangeOfNumber(1,15));

// console.log(makeSandwich('White bread')('unsalted butter')('Straberry'));

// console.log(reverseWords("Vahini is my daughter"));
// console.log(reverseString("vahini is my daughter"));

module.exports = { firstNonRepeatedChar, flattenReduce, countWords, firstRepeatedElement, countWord, factorial };