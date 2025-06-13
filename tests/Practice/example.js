// const arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum);
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,8));
// function even(arr){
//     let even=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             even.push(arr[i]);
//         }
//     }
//     return even;
// }
// function containsString(str){
//     if(str.includes("soorya")){
//         return true;
//     }
// }
// containsString("soorya is a good girl");
// function findDuplicateCharacters(str) {
//     let charCount = {};
//     //let duplicates = [];

//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     console.log(charCount);
// }
// findDuplicateCharacters('hello');
function findDuplicateCharacters(str) {
    // let char=str.split("");
    // console.log(char);


    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log(charCount);
}

findDuplicateCharacters('hello');
