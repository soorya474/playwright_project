let marks= Array(6);
console.log(marks);
let mark=new Array(10,20,30,40,50,60);
var mark1s=[10,20,30,40,50,60];
console.log(mark1s);
mark1s.push(65);
console.log(mark1s);//adds to array end
mark1s.pop()//removes element from array end
console.log(mark1s);
mark1s.unshift(12);//adds to begining
console.log(mark1s);
console.log(mark1s.indexOf(40));
console.log(mark1s.includes(80));
console.log(mark1s.slice(1,4));
let sum=0;
for(let i=0;i<mark1s.length;i++){
    sum=sum+mark1s[i];
    console.log(sum);
   }
var evenscores=[];
var scores=[5,10,15,20,25,30];
for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
        evenscores.push(scores[i]) 
    }
}
console.log(evenscores);