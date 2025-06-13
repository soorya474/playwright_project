function longest(str){
    let str1=str.split(" ");
    let long="";
    for(let word of str1){
        if(word.length>long.length){
            long=word;
        }
    }
    return long;

}
console.log(longest("I love India"));