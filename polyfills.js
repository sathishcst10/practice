/*
    @Polyfill in javascript
*/



//forEach
Array.prototype.forEachCustom = function(callback){
    for(let i = 0; i<this.length; i++){
        callback(this[i],i. this)
    }
};

const testArray = [1,2,3,4,5];

testArray.forEachCustom((item)=>{
   console.log(item+1)
})



//map
Array.prototype.customMap = function(callback){
    let result = [];
    for(let i = 0; i<this.length; i++){
        result.push(callback(this[i],i, this));
    }
    return result;
};
console.log(
testArray.customMap((item)=>{
    return {
        ["rest_"+item] : item
    }
}));

//Filter

Array.prototype.customFilter = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i],i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

console.log("Filter : ",testArray.customFilter((item)=>item>3));

//reduce;
const nestedArray = [[1, 2], [3, 4], [5]];
Array.prototype.customReduce = function(callback, initialValue){
    let accumulator = initialValue;
     for(let i = 0; i<this.length; i++){
        accumulator= callback(accumulator,this[i],i,this);
     }
     return accumulator;
};

console.log(nestedArray.customReduce((curr, acc)=>curr.concat(acc), []));