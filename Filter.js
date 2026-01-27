// Example by Chai aur code

// const coding = ["HTML", "CSS", "Javascript", "Java", "Python"]

// const getValue = coding.forEach( (item) => {
//     console.log(item);
//     return item // undefined
    
// })
// // console.log(getValue);


// Filter Method 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNum = myNums.filter((num)=> num > 4 ) // this way we dont need to write return
// console.log(newNum);

let newNum = myNums.filter((num)=> { 
    return num > 4 // if we open scope {} then we must write return in scop
    }
 )

// console.log(newNum);


// Filter Method example 2

const books = [
  {
    title: "Islamic Studies",
    published: 2000,
    edition: 2026,
  },
  {
    title: "Computer Science",
    published: 1999,
    edition: 2020,
  },
  {
    title: "History",
    published: 2002,
    edition: 2008,
  },
  {
    title: "History",
    published: 1999,
    edition: 2020,
  },
  {
    title: "Math",
    published: 2005,
    edition: 2019,
  },
  {
    title: "Education",
    published: 2006,
    edition: 2018,
  },
];

// ------ here we found books which are only about "History"

// let sortBooks = books.filter((bk) => bk.title === "History");
// console.log(sortBooks);

let userBooks = books.filter( (mybook)=> {
    return mybook.published >= 2000 && mybook.title==="History"
})
console.log(userBooks);

