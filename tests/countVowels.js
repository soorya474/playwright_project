function countVowels(str){
    //let charArr=str.split("")
    let count=0;
    const vowels=["a","e","i","o","u"];
    for(let eachChar of str.toLowerCase()){
        if(vowels.includes(eachChar)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("apple"));