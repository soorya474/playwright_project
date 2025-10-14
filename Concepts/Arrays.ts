/*
1.ordered collection of elements
2.rep as [],or generic Array<T> type
3.Index start from 0
4.Can store same or multiple data types

//Tupe>.fixed lenght array
*/

//Approach:1
let names:string[]=[];//empty array which can hold string values
//Initialization or assigning values
names[0]="soorya";
names[1]="kiram";
names[2]="aaradh";

//Approiach:2
let nam:string[]=["soorya","aaradh","kiran"];

console.log(names)
console.log(nam);
//Approach:3
 let empNames:Array<string>=["A","BarProp","C"];
 let empNames1:Array<string|number>=["A",1,"WSH",2]
 //To print the data
 console.log(empNames);
 //To extract single element
 console.log(empNames[1]);
 //to get lenght
 console.log(empNames.length);
 for(let i=0;i<empNames.length;i++){
    console.log(empNames[i]);
 }
 //Using for in loop(indexes)
 for(let i in empNames){
    console.log(empNames[i])
 }
//using for of loop(no indexes)
for(let value of empNames){
    console.log(value)
}

//Passing an array to the function
//Search an elemnet in an array
function search(el:number,arr:number[]):boolean{
     for(let i=0;i<arr.length;i++){
      if(arr[i]===el){
        return true
    }
    
 }
 return false;
}
 let arr:number[]=[10,20,30,40,50]
 console.log(search(30,arr));

 //Function ttakes an array and returns an array

 function uppercaseworrds(arr:string[]):string[]{
    let result:string[]=[];
    for(let i=0;i<arr.length;i++){
        result[i]=arr[i].toUpperCase();
    }
    return result;

 }
    console.log(uppercaseworrds(["soorya","kiran","aaradh"]));