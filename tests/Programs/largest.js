

function largest(arr){
    let larg=arr[0];
    for(let i=1;i<arr.length;i++){
        if(larg<arr[i]){
            larg=arr[i];
        }
    }
    return larg;
}
console.log(largest([10,2000,25,68,1000]))