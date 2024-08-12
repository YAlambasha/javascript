//fliter

/**
 * find method:the find method is used to find the first elements .it returns the first matching element or undefined if no element is found.
 * findindex -1
 *  * 
 */
const numbers=[1,2,3,4,5,6,5,7,8,9,4];

//find method
const result=numbers.find((curElem)=>{
 return curElem>5;
});
console.log(result);//6 only one 
//find index
const result1=numbers.findIndex((curElem)=>{
    return curElem>5;
   });
   console.log(result1);///5

   const result2=numbers.map((curElem)=>curElem*5);
   console.log(result2);
   const result3=result2.findIndex((curElem)=>{
    return curElem>10;
   });
   console.log(result3);//2

   //filter
console.log(numbers);
   const res=numbers.filter((curElem)=>{
    return curElem>6;
   });
   console.log(res);

   let value=6;
   const num=[1,2,3,4,5,6,7,8,6,9];
   let updatedcart=num.filter((alam)=>{
    return alam!==value;
   });
   console.log(updatedcart);