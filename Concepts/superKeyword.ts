class Parent{
    num:number=10;

    constructor(){
        console.log("parent class");
    }

    display(){
        console.log("parent class")
    }
}

class Child extends Parent{
    num:number=40;//overriding

    constructor(){
        super();
        console.log("child class");
    }


    display(){
        console.log("child class")
    }
}