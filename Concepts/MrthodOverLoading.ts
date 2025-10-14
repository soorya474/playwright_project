class Calculator1{
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


add(a:number,b:number):number;
add(a:number,b:number,c:number):number;

add(a:number,b:number,c?:number):number{//optional parameter
    if(c!==undefined){
        return a+b+c;
    }
    return a+b;
}
}