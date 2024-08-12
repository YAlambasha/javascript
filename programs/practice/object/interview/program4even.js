const numbers=[1,2,3,4,5,6,7,8,9,10];

const filters=[];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0)
    {
        filters.push(numbers[i]);
    }
}
console.log("Even numbers:",filters)

const filters2=numbers.filter(number=>number%2===0);
console.log(filters2);