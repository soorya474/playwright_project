function removeDuplicate(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(newArray.indexOf(arr[i])===-1){
            newArray.push(arr[i])
        }
    }
    return newArray;
}
console.log(removeDuplicate([1,2,2,3,4,5,6]))