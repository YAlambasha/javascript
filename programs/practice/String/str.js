//string in js are a fundamental data type that respresent a sequence of charachter.

//string properties
//length:property that returns the length of string 


/////////////
//escape character:the \is used as an escape charcahter

/////////

// let text="my name is "alam basha"";
let text='my name is alam basha alam';
let text1='my name is \"alam basha\"';

console.log(text);
console.log(text1);

//string search ,methods

//indexOf():method returns the index (position) of the first occurance of a string in a string,or it returns -1 id the sring is not found
//synatx:indexOf(searchingString,position

console.log(text.indexOf("alam"));

//array.form()
let strArr=Array.from(text);
console.log(strArr);
let strMap=strArr.map((curElem,index)=>
    `${curElem}-${index}`
);
console.log(strMap);

//lastindexof
let indexof=text.indexOf("alam");
let index=text.lastIndexOf("alam");
let indexf=text.lastIndexOf("alam",40);
console.log(indexof);
console.log(index);
console.log(indexf);

//search():the search() searches a string for a string (or a regular expression) and returns the postion of the match.

let Searchs=text.search("alam");//-1 alam
console.log(Searchs


)

//search( cannot take a second start postion arugment.
//the indexof() cannnot taje powerful search values(regular expressions).
//they accpet the same arrguments(paratmeter)and return the same value.

//match:returns an array of the matched values or null if no match is found
let  match=text.match("alam");
let  unmatch=text.match("dell");
console.log(match);
console.log(unmatch);
/*
[
  'alam',
  index: 12,
  input: 'my name is "alam basha alam"',
  groups: undefined
]
null
/

/*matchall:returns iterator of all matches,providng detalied onfromation about each match.returns an empty iterator if no match is found.
*/

let matchResult=text.matchAll("alam");
console.log(matchResult);//Object [RegExp String Iterator] {}
console.log(...matchResult);
/*
[
  'alam',
  index: 12,
  input: 'my name is "alam basha alam"',
  groups: undefined
] [
  'alam',
  index: 23,
  input: 'my name is "alam basha alam"',
  groups: undefined
]
*/ 
for(let item of matchResult){
    console.log("hi"+item[0]);
}
//includes():returns true if the string contains the specifed value and false otherwise
let inculde=text.includes("alam");
console.log(inculde);///true
//no regular expression in inculdes

//startwith():the startwith() method returns true if a string begins with a specified value.otherwise it returns false

let starwith=text.startsWith("welcome");
let starwith1=text.startsWith("alam",6);
console.log(starwith);//false
console.log(starwith1);//true

//endswith():retunrs true if astring ends with a spefied value otherwise return false

let end=text.endsWith("alam");
console.log("hi"+end);//true