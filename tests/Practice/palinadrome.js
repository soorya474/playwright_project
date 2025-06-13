function paliandrome(str){
    const rev=str.split("").reverse().join("");
    return rev===str;
}
console.log(paliandrome("soorya"));
console.log(paliandrome("racecar"));
