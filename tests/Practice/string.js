// let day=' monday ';
// console.log(day.length);
// console.log(day.slice(1,5));
// let day1=day.split("d");
// console.log(day1[0]);
// console.log(day.trim());
// let day11='23';
// let day22='33';
// let diff=parseInt((day11-day22)).toString();
// console.log(diff);

let newQuote="Today is funday";
let count=0;
let value=newQuote.indexOf("day");
while(value!=-1){
    count++;
    value=newQuote.indexOf("day",value+1);
}
console.log(count);


