//filter
//searching and filter
const numbers=[1,2,-1,4];
const filter=numbers.filter(function(value){
return value>=0;
});
console.log(filter);
/////////////////////////////////////////////////////////


const ages=[10,20,34,9,8];
const findage=ages.filter(function(value,ind,arr){
console.log("index="+" "+ind+" "+"value="+value+" "+"array="+""+arr);
    return value>=10;
});
console.log(findage);

const userinput=prompt("please enter the number");
const findeven=even.filter(function(value,index,array){
return value%2===0;
});
console.log(userinput+""+findeven);
////////////////////////////////////////////////////

const agess=[10,20,30,45,56];
const findages=agess.filter(function(value,index,array){
    return value%2===0;
});
console.log(userinput+""+findeven)

