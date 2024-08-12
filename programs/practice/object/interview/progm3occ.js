//count occurrences of character


const countChar =(word,char)=>{
  word =word.toLowerCase();
  char =char.toLowerCase();

  totalCount=word.split("").reduce((accum,curChar)=>{
    if(curChar===char){
        accum++;
    }
    return accum;
  },0);
return totalCount;
};


console.log(countChar("MissIssippi","I"));