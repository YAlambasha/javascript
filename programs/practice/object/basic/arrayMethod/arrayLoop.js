//for in for of

var myFriends = ['alam','basha','dell'];
for(let elements in myFriends){
    console.log(elements);//index will give
}
for(let elements of myFriends){
    console.log(elements);//particular array elements
}
//forEach
//Array.prototype.forEach()
//calls a function for each element in the array

myFriends.forEach(function(element,index,array){
    console.log(element);
    console.log(element+"index:"+index+" "+array);
    /**
     * alamindex:0 alam,basha,dell
basha
bashaindex:1 alam,basha,dell
dell
dellindex:2 alam,basha,dell
     */

});
