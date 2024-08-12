function reversestr(str){
  let reverse="";
  for(let i=str.length-1;i>=0;i--){
      reverse+=str[i];
  }
  return reverse;
}
//repeated
function repeat(str){
let repeat="";
for(let i=0;i<str.length;i++){
  if(repeat.indexOf(str[i])===-1)
  repeat+=str[i];  
}
return repeat;
}
//
function findRepeated(str) {
let charCounts = {};
let repeatedChars = "";
for (let i = 0; i < str.length; i++) {
  charCounts[str[i]] = (charCounts[str[i]] || 0) + 1;
}
for (let char in charCounts) {
  if (charCounts[char] > 1) {
    repeatedChars += char;
  }
}
return repeatedChars;
}
function countLetters(str) {
let charCounts = {};
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase(); 
  charCounts[char] = (charCounts[char] || 0) + 1;
}
return charCounts;
}


let name="alam basha";

let reversename = reversestr(name);
let repeated=repeat(name);
let showRepeated = findRepeated(name);
let letterCounts = countLetters(name);
console.log("reverse string is ="+ reversename);
console.log("repeated string is ="+ repeated);
console.log("show repeated string is ="+ showRepeated);
console.log("Letter Counts:", letterCounts);








