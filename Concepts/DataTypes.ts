let rollnum:number=1;
let price=30.0;
console.log("Rollnum",rollnum);
console.log(typeof(rollnum));
//or
console.log(typeof rollnum)
//2.STRING TYPE
let fname="soorya";
let lname='soorya';
//`,${},parametrize ny value>>Syntax
let greeting:string=`Hello,${fname} ${lname}`;
//3.BOLEAN
let isStudent:boolean=true;
let isEmployed:boolean=true;
console.log("isStudent",isStudent);

//4.NULL,UNIDENTIFIED

let emptyValue:null=null;
let notassigned:undefined=undefined;
//5.any type
//>>not used as it loses typescript benefits

let value:any="Welcome";

//6.UNION TYPE>>COMBINE DIFFERENT DAATTYPES

let id:number |string|boolean;
//here id can be a number,string or boolean

//creating afunction
function sum() :void{
    console.log(30)
}

function sum1():number{
    return 30;
}