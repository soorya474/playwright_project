//public>>accesible anywhere
//protected>>accessible in the the same class and sun classes
//private:only within class

class Sooya{
    public name:string;
    protected age:number;
    private ssn:number;

    constructor(name:string,age:number,ssn:number){
        this.name=name;
        this.ssn=ssn;
        this.age=age;

    }

    display():void{

        console.log(this.name);

    }
}

class child extends Sooya{
    private empId:number;
    constructor(name:string,age:number,ssn:number,empId:number){
        super(name,age,ssn);
        this.empId=empId;
    }


        display():void{

        //console.log(this.ssn);//erro bz only in class
console.log(this.name);//accesibel
console.log(this.empId);
console.log(this.age);//accesible

    }
}