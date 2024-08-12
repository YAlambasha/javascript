//write a js function calculator that takes two numbers and an operator as parameters and returns the result of the operation.function should support addition,sub,mul

// function calculator(num1,num1,operator)
// {
//     let result;
//     switch(operator){
//         case "+":
//         return num1+num2;
        

//         case "-":
//         result=num1-num2;
//             return result;
        
//         case "*":
//             result=num1*num2;
//             return result;
//             case "/":
//                 if(num2===0){
//                     return "0 is not allowed";
//                 }
//                 else{
//                 result=num1*num2;
//                 return result                
//                 }
//         default:
//             return"no operator found";
//             }

// }
// console.log(calculator(5,2,"+"));

const calculator=(num1,num2,operator)=>
{
    let result;
    switch(operator){
        case "+":
        return num1+num2;
        

        case "-":
        result=num1-num2;
            return result;
        
        case "*":
            result=num1*num2;
            return result;
            case "/":
                if(num2===0){
                    return "0 is not allowed";
                }
                else{
                result=num1*num2;
                return result                
                }
        default:
            return"no operator found";
            }

}
console.log(calculator(5,2,"+"));

//reverse a string without using bulid in method

const isReverse=(str)=>{
    let reverse="";
    for(let char=str.length-1;char>=0;char--){
        reverse=reverse+str[char];
    }
    return reverse;

};
console.log(isReverse("Alam Basha"));

//palindrome

const isPalindrome=(str)=>{
    let reverse="";
    for(let char=str.length-1;char>=0;char--){
        reverse=reverse+str[char];
    }
    // if(str===reverse){
    // return true;
    // }
    // else{
    //     return false;
    // }
    return str===reverse? true:false;

};
console.log(isPalindrome("level"));

