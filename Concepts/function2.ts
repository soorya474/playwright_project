//Overloaded function
/*
1.Write function signature
2.Implement a function
3.Call the function
*/
//Eg:1

function displayss(id:number):number
function displayss(id:string):string
//Implementaion shud handle both cases
//In function overloading>same name,but type of parameers are different
function displayss(param:number|string):string|number{
    if(typeof param==="number"){
         console.log("ID is",param);
         return (`User id is ${param}`);
    }
    else{
        console.log("Name is",param);
        return (`User id is ${param}`);
    }
}