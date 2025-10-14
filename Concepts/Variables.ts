// Specifying the datatype is optional
// Syntax: keyword variablename:data type= value
//Var-avoid as it has functional scope,let and const>block scopr
//let-whenever value of variable needs to change declare it with let
//when value is constant use const
//let and var can be declared without initialization
var age:number=30;
var age1=50;
console.log(age)
//Case:1>Functional scope

function varScope(){
    if(true){
        var msg="Hello World";
        console.log(msg);
    }
    console.log(msg);
}
varScope();

//Case:2>Block scope

function letScope(){
    if(true){
        let msg="Hello World";
        const greet="Hi"
        console.log(msg);
        console.log(greet);
    }
    //cant acces bz scope is block level
    // console.log(msg);
    // console.log(greet);
}
letScope();

//Case:3>Scope Diff

function scope(){
    if(true){
        var num1=100;
        let num2=20;
        const num3=55;
        console.log(num1);
        console.log(num2);
        console.log(num3);
    }

    //cant acces bz scope is block level
      console.log(num1);
        // console.log(num2);
        // console.log(num3);
}
scope();

var x;//if u dont decsribe any type it will be any

const z=10;//if we use const value shud be initialized
console.log(z)

//Case:4  Redeclaration
var city="NewYork";
var city="Las Vegas";
console.log(city)
//REdeclaration is posible with var>>thts y its not widely used
// let country="UK";
// let country="india"
//>>redeclaration not alloweed for using let and const
//Reassignement is allowed for var and let but not for constant
 var age=23;
 age=30;
console.log(age);

let ages=30;
ages=4;
console.log(ages);

//Case:5>>Hoisting
//Accesing the value of a varaiable w/o declaring a variable
