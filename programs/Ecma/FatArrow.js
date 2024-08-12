//arrow function is also known as fat arrow function,were introudced as a concise way to write anonymous functions.

// const functionName=(param1,param2, ...)=>{
// return result;
// };

const sum =function(a,b){
    let result =`The sum of ${a} and ${b} is ${a+b}.`;
    console.log(result);
};
sum(5,5);

const suum=(a,b)=>console.log(`the sum of ${a} and ${b} is ${a+b}.`);
suum(5,5);

//if the function body consists of a single expression,the braces{} and the return keyword can be omitted
const summ=(a,b)=`the sum of ${a} and ${b} is ${a+b}.`;
console.log(summ(5,5));

//if there is only one parameter,the parentheses() arround the parameter list can be omitted.
const summm=a=`the sum of ${a}  is ${a+a}.`;
console.log(summm(5));

//if there are no parameters,use an empty set of partheses()
const greet=()=>console.log("plz aoiaho");
greet();