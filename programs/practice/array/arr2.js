//write a program to multipy eacg element with 2
const numbers=[1,2,3,4,5];
//foreach-perfroms an action on each element
//map-creats a new array with transformed elements

numbers.forEach((curElem)=>{
    console.log(curElem*2);
});
const doubleValue=numbers.map((curElem)=>{
    return curElem*2;

})
console.log(doubleValue);
//map-creats a new array with transformed elements

/*
key differnce:
!return value:foreach it doesn't return a value.the foreach methos is used for iterating over the elements of an array and 
performing a side effect,such as modifiying the array or perfoming a task for each elements

map:it returns a new array containig the results of applying a function to each element in the original array.the original
array remains unchanged.

chaining:
foreach:it doesn't return a value,so it cannot be directly chained with other array methods.
map:since it returns a new array.you can chain other array methods after using map



*/