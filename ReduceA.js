// .reduce() = reduce the elements of an Array to a single value

const prices = [20, 30, 40, 1000];

const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

function sum(accumulator, elements) {
  return accumulator + elements;
}


// -----

const grades = [75,50,90,80,65]

const maximum = grades.reduce(findMax)
const min = grades.reduce(findMin)


function findMax(acc, elem){
    return Math.max(acc, elem)
}

function findMin(acc,elem){
    return Math.min(acc,elem)
}

console.log(`Max value: ${maximum}`);
console.log(`Min value: ${min}`);

