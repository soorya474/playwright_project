

function countVowels(str){
    let str1="aeiouAEIOU";
    let count=0;
    let vowarr=[];
    for(let eachchar of str){
        if(str1.includes(eachchar)){
            count++;
            vowarr.push(eachchar)

        }
    }
    return [count,vowarr];
}
console.log(countVowels("Soorya"))