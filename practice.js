// async function test(){
//     console.log(1);
//     await new Promise(resolve=>setTimeout(resolve,0));
//     console.log(2);    
// };



// console.log(3);
// test();
// console.log(4);


//output will be : 3,1,4,2

// function haveSameKeys(obj1,obj2){
//     const keys1=Object.keys(obj1).sort();
//     const keys2 = Object.keys(obj2).sort();
//     return keys1.toString() === keys2.toString();
// }

// const _a = {a:2,b:2,c:4};
// const _b = {a:2,b:3,c:1};
// console.log(haveSameKeys({},{}));

// function filterObject(obj, callback){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key,value])=>callback(value,key))
//     )
// }

// console.log(filterObject(_a,val=>val>2));

// function slowSquare(n){
//     console.log('calculating...');
//     return n*n;
// }

// function memoize(fn){
//     const cache = {};
//     return function(n){
//         if(cache[n]) return cache[n];
//         const result = fn(n);
//         cache[n] = result;
//         return result;
//     }
// }

// const fastSquare = memoize(slowSquare);

// console.log(fastSquare(5));
// console.log(fastSquare(5));


// const names = ['vahini','mari','adhi',null,undefined,false];
// const cleanNames = names.filter(Boolean);

// console.log(cleanNames);


const nestedArray = [1,2,[3,4,[5]]]; //sum entire values in the array;

function sumNested(arr){
    debugger;
    let total = 0;
    for (let n of arr){
        if(Array.isArray(n)){
            total +=sumNested(n);
        }else if(typeof n === 'number'){
            total += n;
        }
    }
    return total;
}

console.log(sumNested(nestedArray));

//currying;

const currFn =a=>b=>c=>a+b+c;

console.log(currFn(1)(2)(4));