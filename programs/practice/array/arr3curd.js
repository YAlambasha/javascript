//insert,add,replace and deleted
/**
 * push():method that adds one or more elements to the end of an array.
 * pop():method that removes the last elements from an array.
 * unshift():methos that addds one or more elements to the beginning of an array.
 * shift():method that removes the dirst elements from an array
 * 
 */
let brands=["dell","noise","vivo","iphone"];


// console.log(brands.push("fireblot"));
// brands.push("fireblot");
//pop
console.log(brands.pop());
console.log(brands);
//unshift:beigning add
console.log(brands.unshift("alam"));
console.log(brands);

//shift:first remove

console.log(brands.shift());
console.log(brands);

//splice() method of array instances changes the contents of an array by removing or replacing existing and/or adding new elements in place.
/**
//  * syntax:splice(start,deleteCount,item1,item2,/* ..., itemN)

 * 
*/

//add end 
brands.splice(1,1,"lg");
console.log(brands);


//searching
///for search we have indexof,lastindexof&inculdes

const numbers=[1,2,3,4,5,6,7,6,9,10];
console.log(numbers.indexOf(4,5));

//lastindexof
const result=numbers.indexOf(6);
console.log(result);
const result1=numbers.lastIndexOf(6);
console.log(result1);

//includes
const result3=numbers.includes(16);
console.log(result3);

//challenge
/**
 * 1.add dec at end 
 * 2.what is the return value of splice method
 * 3.update march to March(updated)
 * 4.deleted june form array
 * 
 */
const months=["jan","march","april","june","july"];

months.splice(months.length,0,"dec");
console.log(months);

//empty array
//check the value
const indexToUpdate=months.indexOf("march");
months.splice(indexToUpdate,1,"March");
console.log(months);

const indexToDelete=months.indexOf("june");
months.splice(indexToDelete,1);
console.log(months);