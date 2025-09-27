function paliandrome( str){
    let rev=str.split("").reverse().join("");
    if(rev==str){
        return true;
    }
    else{
        return false;
    }
}
console.log(paliandrome("madam"));
console.log(paliandrome("soorya"));