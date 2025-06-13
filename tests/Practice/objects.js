let person={
    name:"soorya",
    age:"36",
    fullName:function(){
        console.log(this.firstName+this.lastName);
    }

}
console.log(person.fullName());
console.log(person.name);
console.log(person['name']);
for(let key in person){
    console.log(person[key]);
}