{
//palindrome
function ispalindrome(str){
    let palind='';
    for(let i=str.length-1;i>=0;i--){
        palind+=str[i];
        
    }
   return str===palind;
}

let a="madan";

if(ispalindrome(a)){
 console.log("ispalindorme="+palindrome);
}
else{
    console.log("is not palindrome")
}
}
{
    //largestnumber
function findlargestno(arr){
    let large=arr[1];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>large){
            large=arr[i];
        }
    }
    return large;
}


    let array=[23,54,76,87,98,4,65];
    let largestnumber=findlargestno(array);
    console.log("the largest number is="+largestnumber);
}