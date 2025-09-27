function wordFrequency(str){
    let str1=str.split(" ");
    const wordCount={};
    for(const words of str1){
        wordCount[words]=(wordCount[words]||0)+1;

    }
    for(const words in wordCount){
        console.log(`${words} : ${wordCount[words]}`)
    }
}

console.log(wordFrequency("I love my inida love my love"))

function frequnecy(str){
    let str1=str.split("");
    const wordCount={};
    for(const words of str1){
         wordCount[words]=(wordCount[words]||0)+1;
    }
}