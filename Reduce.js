
// .reduce() = reduce the elements of an array to a single value

//Example - 1 // we can use the arrow function 

// const prices = [10, 20, 30, 40, 50]

// const mySum = myArr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// },0);

// console.log(mySum);



//Example - 1 // we can using the function 

// const myArr2 = [1,2,3,4,5]

// let adds = myArr2.reduce(myReduce);

// console.log(`$${adds.toFixed(2)}`);


// function myReduce(accumulator, currentValue){
//     return accumulator + currentValue
// }



//Example - 3 // to finding maximum value from an array

const myArr3 = [2,4,6,8]

const maximum = myArr3.reduce(findMaxValue);
const minimum = myArr3.reduce(findMinValue);

console.log(maximum);
console.log(minimum);


function findMaxValue(accumulator, currentValue){
    return Math.max(accumulator, currentValue)
}
function findMinValue(accumulator, currentValue){
    return Math.min(accumulator, currentValue)
}