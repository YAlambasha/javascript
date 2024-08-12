//Hash Tag Genrator


const generateHash=(str)=>{
    if(str.length>280 || str.trim().length === 0){
        return false;
    }
    str=str.split(" ");
    console.log(str);
    str=str.map((curElem)=>
    
    curElem.replace(curElem[0], curElem[0].toUpperCase())
    // curElem.charAt(0).toUpperCase()+curElem.slice(1)    
);
console.log(str);
    str=str.join("");
    return str;
}

console.log(generateHash("my name is alam basha sahdakjh kjafljla afjlkja kjafajoia kjfejioe jlfwoi The prompt is a blocking function, which means it halts JavaScript execution until the user interacts with the dialogue. As this can have an impact on the user experience in web applications, it’s frequently utilized for short input scenarios or fast interactions where blocking behavior is acceptable"));


const generateHashs=(str)=>{
    if(str.length>280 ||str.trim().length===0){
        return false;
    }
    
    


}

console.log(generateHashs("my name is hi hlo "));