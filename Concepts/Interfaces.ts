//Using interface>>only props and abstract methods
//tells what properties and types an object shud have
//can implement using class
//interface interfacename{
//props
//abstract methods
//}

//Export>>it becomes a module>>to us ein another file we have to import

//Eg:1 Basic Interface

interface Person{
    name:string;
    age:number;
}
//here studnet an object with props defined in interface
let stu:Person = {
    name: "John",
    age: 30
};

console.log(stu.name);
console.log(stu.age);

//Example2:Optional priperties

interface Employee{
      name:string;
    age:number;
}
let emp9:Employee={
    name:"asdf",
    age:55
}

//Extending interface

interface Animal{
    name:string;
}
interface Dog extends Animal{
    color:string;
}

let myDog:Dog={
    name:"pods",
    color:"black"
}

console.log(myDog.color,myDog.name);