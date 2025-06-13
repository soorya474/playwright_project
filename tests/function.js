function add(a,b){
 return a+b;
}
 let sum=add(3,4);
 console.log(sum);

 let sum1=function(c,d){
    return c+d;
 }
let sum2=sum1(3,8);
console.log(sum2);

let sumOfNum= (c,d)=>c+d;
console.log(sumOfNum(10,100));