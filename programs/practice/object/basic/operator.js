//comparison operator
/*
equal to == check two values are equals
strict equal ===check two values are equals performing type corrections 
*/
console.log(189=="189");
console.log(5==="5");
console.log(5!="5");
console.log(5>5);
console.log(4<5);

/** logical operator and &&,|| or, and logical not ! 
 *&& returm if both operands are true otherwise it returns false 
 * t t-t
 * t f-f
 * f-t-f
 * f f-f
 * 
 * || return if either one value is equal
 * t t-t
 * t f-t
 * f t-t
 * f f-f
 * ! logical not 
 * 
 * 
 * bool(0)-->false
 * bool(1)-->true
 * int(true)-->1
 * int(false)-->0
 * 
 * Ternary operator
 * condition?expressionIfTrue:expressionifFlse
*/
var age=15;
var result=age>=18?"yes":"no";
console.log(result);

console.log("5" - 3);
console.log([2<12]<5);
console.log("20"+10+10);


