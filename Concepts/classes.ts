class Student{
    name:string;//redaonly means can assign the value to variable only once thru the constructor,can get values but cant modify
     id1:number;
    grades:string;
    email?:string;//this means an optional parameter

constructor(name:string,id:number,grades:string,email?:string){
   //class variables assigned tpo obj variables thru construtor
    this.name=name;
    this.id1=id;
    this.grades=grades;
    this.email=email;


}

display():void{
    console.log("id is",this.id1)

}

}

let s1=new Student("soorya",1,"A");
s1.display()