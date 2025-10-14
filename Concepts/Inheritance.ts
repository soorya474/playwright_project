//Extends prpserties form the parent class
//done using extends keyword
class car
{

    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){
        this.name=name;
        this.color=color;
        this.model=model;
    }

    display():void{
        console.log(`car name is ${this.name},color is ${this.color},model is ${this.model}`);
    }

    start():void{
        console.log("car started");
    }


}
class Honda extends car{
    year:number;

     constructor(name:string,color:string,model:string,year:number){
        super(name,color,model);//to call the parent class constructor
        this.year=year;
}
//Method Overriding
//same method name in parent and child class with same number of parameters
//to provide specific implementation of the method in the child class
display():void{
    console.log(`car name is ${this.name},color is ${this.color},model is ${this.model},year is ${this.year}`);
}
start():void{
    console.log("honda started");
}
}

let Car:car=new Honda("","","",6)
//here parent class variable is able to hold child class object
//methods shud be common to both
