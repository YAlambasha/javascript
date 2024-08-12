//let :the let keyword is used to declare varibales with block scope.variables declared with let are mutable,value can resigned.
//const:----------with block scope/but once a value is aasigned to a const variable,it can't reassign.immutable

// var myFavWorldBestName="dell";
// myFavWorldBestName="dells";
// console.log(myFavWorldBestName);

// let myFavWorldBestName="dell";
// myFavWorldBestName="dells";
// console.log(myFavWorldBestName);

// const myFavWorldBestName="dell";
// // myFavWorldBestName="dells";
// console.log(myFavWorldBestName);

//what var can do
var name="noise";

if(true){
    var name="voind";
    console.log(name);
}

name="technical";
console.log(name);

//let can do
// let name="noise";

// if(true){
//     let name="voind";
//     console.log(name);
// }

// name="technical";
// console.log(name);

// backticks
let firstName="alam";
let lastName="basha";

// let fullName=firstName+lastName;
let fullName=`${firstName} ${lastName}`;
console.log(fullName);

//string Interpolation:template strings interpolation,allowing you to embed expressions directly within the string.interpolation expressions are enclosed in${}

let age=20;
let message=`i am ${age} years old.`;
console.log(message)


//Default parameters
function sum(a,b){
    return a+b;

}
console.log(sum(5));