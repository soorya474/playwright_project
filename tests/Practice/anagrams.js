function anagrams(str1,str2){
    let revstr1=str1.split("").sort().join("");
    let revstr2=str2.split("").sort().join("");
    return revstr1===revstr2;
}
console.log(anagrams("listen","silent"));
console.log(anagrams("liten","silent"));