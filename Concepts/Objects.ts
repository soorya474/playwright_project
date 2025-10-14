//Using object type>>directly dfeine the value sof variables
//object means stores no primitive data
//in below syntax cant create methoods
// let employee:object={
//     name:"John",
//     age:25,
//     job:"Engineer"
// };

let emp1={
    name:"John",
    age:25,
    job:"Engineer",


    getDetails:function(){
        console.log(this.name,this.job,this.age)
    }

}
console.log(emp1.name)

//Approach:2

let student:{
    name:string,
    age:number,
    grade:string,



}
//Approach:3 using type

type Product={
    name:string,
    price:number,
    getInfo:()=>string

    }

// let book1:Product=
// {  //ddefining the object of type product
// name:"ALAICE IN WONDERLAND",
// price:1000

// }
// //using the above approac w ecan create n   number of object with same structure
// let book2:Product={
//     name:"RICH DAD POOR DAD",
//     price:500
// }

//APPROACH 4>>USING CLASSES

class Person{
    name:string;
    firstName:string;
    lastName:string;

    //to declare constructor we sue keyword constructor>>to assign value sto the class variables
constructor(name:string,fname:string,lname:string){
    this.name=name;
    this.firstName=fname;
    this.lastName=lname;

}
    getFullNme():string{
        return this.firstName+" "+this.lastName;
    }
}