function firstNonRepeatedChar(str){
    const count = {};
    for(let char of str){
        if(!count[char]){
            count[char] = 1;
        }else{
            count[char] = count[char] + 1;
        }
    }

    for(let char of str){
        if(count[char] === 1){
            return char;
        }
    }
    return null;
}

function flattenReduce(arr){
    return arr.reduce((acc,item)=>
        Array.isArray(item) ? acc.concat(flattenReduce(item)) : acc.concat(item), []
    )
}

function countWords(str){
    const words = str.trim().toLowerCase().split(/\s+/);
    const freq = {};

    for(let word of words){
        freq[word]=(freq[word] || 0) + 1;
    }
    return freq;
}
console.log(countWords("hello world hello"));
//console.log(flattenReduce([1,2,[3,[4]],5]));

module.exports = {firstNonRepeatedChar, flattenReduce, countWords};