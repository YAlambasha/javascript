//porgram to check leap year

var year=2021
;

if((year%4===0 && year %100!==0)||year%400 ===0){
console.log(year,"it's leap year");
}else{
    console.log(year,"it's not a leap year");
}