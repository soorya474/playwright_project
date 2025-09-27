
function anagrans(str1,str2){
    let rev1=str1.split("").sort().join();
    let rev2=str2.split("").sort().join();
    if(rev1=== rev2){
        return true;
    }
    else{
        return false;
    }
}
console.log(anagrans("silent","listn"))