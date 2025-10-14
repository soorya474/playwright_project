class Calculator{
    constructor();//default constructor
    constructor(a:number,b:number);//parameterized constructor
//Can have multiple constructors only one implementation
    constructor(a?:number,b?:number){//optional parameters
        if(a!==undefined && b!==undefined){
            console.log("sum is",a+b)
        }
        else{
            console.log("default constructor")
        }

    }

}

let calc1=new Calculator();
let calc2=new Calculator(10,20);
