//extracting string

//slice():extracts a part of a string and retunrs the extracted part in a new string
//slice() extracts up to but not inculding indexend

let tex="hello javascriot, welcome to our world";
let result=tex.slice(5,15);
console.log(result);

//substring
/*
substring() extracts a part of a stirng and returns the extracted part in a new string.
1.js counts positions from zero.
2.substring() extracts up to but not inculding indexEnd same slice
*/
let sub=tex.substring(6);
let sub1=tex.substring(-6);
let sli=tex.slice(-6);
console.log(sub);//javascriot, welcome to our world
console.log(sub1);//ful date hello javascriot, welcome to our world
console.log(sli)