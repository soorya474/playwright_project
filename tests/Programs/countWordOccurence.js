

function countWords(str){
    let word="love";
    let count=0;
    let arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        if(word===arr[i]){
            count++;
        }
    }
    return count;
}
console.log(countWords("I love my love love is great"))