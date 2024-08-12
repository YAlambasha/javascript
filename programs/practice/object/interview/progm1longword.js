//programming question:longest word in string
//1.program 

const findLongestWord =(str) =>{
    if(str.trim().length === 0){
        return false;

    }
    words =str.split(" ");//string to arry
    console.log(words);
      words=words.sort((a,b)=> b.length-a.length);
      console.log(words); 
       
      return words[0];
        
}


console.log(
    findLongestWord("checklist Bulid asstes Email login Roles aemplatest"));