//REDUCE:reduce methoid i n js used to accumulate or reduce an array to a single value.
//synatx:array.reduce(function callback(accumulator,currentvalue,index,array))

//calculates the total price of items in shopping cart..function should take.and return totalprice


const productprice=[100,200,300,400,500];
const totalprice=productprice.reduce((accum,curElem)=>{
    return accum+curElem;
},0);

console.log(totalprice);