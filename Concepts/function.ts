//Function is declared with  aname

/**
 * function funname(parameters):return type{
 * //code block
 * }
 */
//1.Named function with no parameters and no return type

function displays():void{
    console.log("Welcome to TS");
}
displays();

//function created inside a class>>>>method

//2.Nmaed function with param and return value

function addNum(num1:number,num2:number):number{
    return num1+num2;
}
console.log(addNum(2,3))

//3.Named function with rest parameters
//that is can add n number of parmeters
//Below is the syntax
let sums:number=0;
function addNum1(...nums:number[]):number{
    
    for(let i=0;i<nums.length;i++){
        sums=sums+nums[i]
    }
    return sums
}

//4.Nmaed function with rest parameters and return type

function findElts(...elements:(number|string)[]):number{
   return elements.length;
}
//4.Named function with optional parameters>>if we put ? that parameter becomes optional
function displayDetails(id:number,name:string,mailid?:string):void{
    console.log(id)
}
displayDetails(1,"soorya");
//5.Nmaed function with default parameters

function calaculatePrice(price:number,rate:number=0.50):void{
    let discount=rate*price/100;
}
//6.Anonymous function
//here function no name so we need to assign to a vriable
//this function can also has parameters and return type 
let msg=function():string{
    return "Hello Typescript";

 }
 console.log(msg());

 //7.Arrow function/Lambda function
 //no functiona name>>so we have to get in a variable
 //parameters are optional
 //use arrow
 //No parameters no return value
 let greet=():void=>{
    console.log("Arrow function with no param and no ret type")
 }
 greet();

 //Arrow fn with parame and return type
 //only one single return type and nthg else in the body curly braces are not required
 let add=(a:number,b:number):number=>{
 return a+b;
 }
 add(2,3);
 //Implict function>>no return and no body in curly braces
 let add1=(a:number,b:number):number=>a+b;

 //Arrow function with optional parameters,default parameter
 //if 1st param is optional 2 nd next consecutives shud be optional
 let address=(id:Number,names:string,mailid?:string)=>{

 }
 //Arrow fn with rest parameters
 let address1=(...elements:(number |string)[]):number=>{
    return elements.length;
 }
