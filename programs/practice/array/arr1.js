//array: array is an object that respresents a collection of simillar type of elments

const persons =["alam","allah","dell","bishal"];
//persons[-1]
//persons.at(-1)
//persons.at(-2

/**
 * Iterable-object where you can use for-of loop
 */

//array like object:any object with length.property and use indexes to access items
let arr=[];
console.log(typeof arr);

//creating arrays
//array constructur or with array literals([])

//using array constructur 
let fruits=new Array("apple","orange","banana");
console.log(fruits);

//using array liternal

let fruit=["apple","orange","banana"];
console.log(fruit);
//we can also create an empty array
let arra=[];
console.log(typeof arra);


//ACCessing elements:array elements are accessed using zero-based-indices


// let fruitt=["apple","orange","banana"];
// console.log(fruitt[0]);

//modified elements


let fruitss=["apple","orange","banana"];
fruitss[2]="mango";
console.log(fruitss);

//array traversal/iterating over arrays
//for of loop ,also known as iterable
//for of loop:the for.. lop is used to iterate over the values of an iterable object,such as arrays,str,ot other iterable objects

// let cars=["bmw","adui","benz","innova","alto","swift"];

// for(let alam of cars){
//     console.log(alam);
// }
/*
bmw
adui
benz
innova
alto
swift*/

//for in looop:the for inloop is used to iterate over the properties(Inculding indices )of an objects
// let cars=["bmw","adui","benz","innova","alto","swift"];

// for(let alam in cars){
//     console.log(alam);
// }
/*
0
1
2
3
4
5*/

//for each:methods calls the provided function once for each element of the array.the provided function may perftom any kind of operation on the elements of the given array

// array.forEach(function
//     callback(currentValue,index,array){
//         //logic
//     },thisValue);


//     array.forEach((currentValue,index,array)
// {
//     //logic
// },thisValue);

// let cars=["bmw","adui","benz","innova","alto","swift"];

// cars.forEach((curElem,index,arr)=>{
//     console.log(`${curElem} ${index}`);
//     console.log(arr);
// })
/**
 * bmw 0
adui 1
benz 2
innova 3
alto 4
swift 5
 */
//current array only modify
// const myForEach=cars.forEach((curElem,index,arr)=>{
//     return `${curElem}${index}`;
// });
// console.log(myForEach);
//map()
/*
*array.map(function callback(currentValue,index,array){
//logic},thisValue);

array.map((currentValue,index,array)=>{
    //logic
    },thisvalue);



*/
 let cars=["bmw","adui","benz","innova","alto","swift"];

cars.map((curElem,index,arr)=>{
    console.log(`${curElem} ${index}`);
    // console.log(arr);
})

// const myMapArr=cars.map((curElem,index,arr)=>{
//     return `${curElem}${index}`;
// });
// console.log(myMapArr);
const myMapArr=cars.map((curElem,index,arr)=>{
    return `my fav fruit is ${curElem}`;
});
console.log(myMapArr);