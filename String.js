// Lecture - 11 is all about JS Strings
//


// let myName = "Muhammad Faisal";
// let lastName = "Khan";

// console.log(`My name is ${myName.toUpperCase()} ${lastName}`);

// const name = new String('Faisal') // we can use this syntax to see all the string methods in browser inspect console

const mName = "Faisal";

// console.log(mName[0]);
// console.log(mName.__proto__)

// console.log(mName.length); // 6
// console.log(mName.toLocaleUpperCase()); // FAISAL
// console.log(mName.toLowerCase()); // faisal
// console.log(mName.charAt(2)); //I how to check character index/position by adding number
// console.log(mName.indexOf('s'));// 3, how to check char position by adding character 's'

const myString = "Faisal-Khan";

// --------Substring()--------

const myNewString = myString.substring(0, 4); //'Fais' and to find range from 0 to 3 and 4 is not included but range

// --------Slice()--------

const myString3 = myNewString.slice(-6,2)
// console.log(myString3);



// --------Trim()--------

const myStringTrim = "    Hamdan   "

// console.log(myStringTrim.trim());


// --------Replace('Find', 'replace')--------

const url = "https://seekdigit.com/my%20web%20page"

// console.log(url.replace('%20', '-')) //https://seekdigit.com/my-web-page

// --------ReplaceAll('Find', 'replace')--------

// console.log(url.replaceAll('%20', '-'));


// --------Includes('find')--------

const findName = "hamdan khan"
// console.log(findName.includes('hamdan')); // true 
// console.log(findName.includes('faisal')); // false 





// --------Split()--------

const mySplit = "Hamdan-Faisal-Khan"
// console.log(mySplit.split('-')); //[ 'Hamdan', 'Faisal', 'Khan' ]


// --------Repeat()--------

const dash = '-'.repeat(50);
console.log(dash);
