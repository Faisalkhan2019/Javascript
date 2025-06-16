let num = 10;

// console.log(num.toString());
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(10));
// console.log(num.toString(16));




// The toString() method is available on values that are numbers, Booleans, objects, and strings. (Yes,
// each string has a toString() method that simply returns a copy of itself.) If a value is null or
// undefined, this method is not available.
// In most cases, toString() doesn’t have any arguments. However, when used on a number value,
// toString() actually accepts a single argument: the radix in which to output the number. By default,
// toString() always returns a string that represents the number as a decimal, but by passing in a
// radix, toString() can output the value in binary, octal, hexadecimal, or any other valid base, as in
// this example:
// let num = 10;
// console.log(num.toString()); // "10"
// console.log(num.toString(2)); // "1010"
// console.log(num.toString(8)); // "12"
// console.log(num.toString(10)); // "10"
// console.log(num.toString(16)); // "a"
