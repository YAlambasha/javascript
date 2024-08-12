/**
 * given an array of products where each product has a name and a price,write a funtion that uses the filter method to return an array containig only the products with a price less than or equal to 500
 * const products=[{name:laptop,price:1200},
 * name:phone,price:800,
 * name:tablet,price:300],
 * name:smartwatch,price:150
 * 
 * 
 */
const products=[
    {name:"laptop",price:1200},
    { name:"phone",price:800},
     {name:"tablet",price:300},
     {name:"smartwatch",price:150}
];

const filterproducts=products.filter((curElem)=>{
    // console.log(curElem.price<=500);
    return curElem.price<=500;

});
console.log(filterproducts);
//[ { name: 'tablet', price: 300 }, { name: 'smartwatch', price: 150 } ]

//find unquie value
const numbers=[1,2,3,5,5,67,1,4,7,6,8,9,89,10];
let uniqueValue=numbers.filter((curElem,index,arr)=>{
    // console.log(arr.indexOf(curElem));
// // console.log(curElem);
console.log("hi"+index)
console.log("hello"+arr.indexOf(curElem));
return arr.indexOf(curElem)===index;
});

console.log(uniqueValue);
console.log(new Set(numbers));
console.log([...new Set(numbers)]);


//SORT AND COMPARE

//sORTing an array:the sort method sorts the elements of an array in place and returns the sorted array.by default,it sorts as strings
console.log(new Set(numbers));
 const frut=["apple","banana","strberry","mango","graps"];
 frut.sort();
 console.log(frut);
 numbers.sort();
 console.log(numbers);


 //compare callback function decsecnding order
  
 //syntax
//  const sortedNumbers=numbers.sort((a,b)=>a-b);
//  if(a>b) return 1 =>switch the order
//  if (b>a) return -1 =>keep the order

numbers.sort((a,b)=>{
    if(a>b) return 1;
    if(b>a) return -1;
});
console.log(numbers);
//as
numbers.sort((a,b)=>{
    if(a>b) return -1;
    if(b>a) return 1;
});
console.log(numbers);


//array  using map method string is capitalizd

const answer=frut.map((curElem)=>{
    return curElem.toUpperCase();
})
console.log(answer);

//square only even number
const sol=numbers.map((curElem)=>{
    if(curElem%2===0){
    return curElem*curElem;
    }

}).filter((curElem)=>curElem!==undefined);
console.log(sol);

//addd mr to prefix to new array
const names=['alam',"hari","naveen"];
const prefixName=names.map((curName)=>
    `Mr.${curName}`

);
console.log(prefixName);