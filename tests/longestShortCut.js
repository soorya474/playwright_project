let longest= (str)=>{
    let words=str.split(" ");
    let long="";
    for(let word of words){
        if(word.length>long.length){
            long=word;
        }
    }
    //return word;
}