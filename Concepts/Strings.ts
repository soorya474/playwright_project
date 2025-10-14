let str1:string="hi i am good";
let str2:string='hi i am good';
let str3=`hi i am good`
//back tic when working with variable

let num1:number=10;
console.log("number is",num1);
console.log(`Number is ${num1}`);

console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//charAt(index) and indexOf(string)
console.log(str1.charAt(4))//>>return string based on index
console.log(str1.indexOf("i"))//>>return index based on string

//substring(starting index,ending index)
console.log(str1.substring(3,7))//ending index not included

//includes()>>returns true if presnt
console.log(str1.includes("good"));

//startsWith(),endsWiths()>>returns boolean
console.log(str1.startsWith("hi"));
console.log(str1.endsWith("good"));

//replace(old string,new string)
console.log(str1.replace("good","bad"));

//split()>>converts string to array based on separator
let myArray1:string[]=str1.split(" ");
console.log(myArray);

//trim(),trimStart(),trimEnd()>>removes whitespaces
//String is immutable ie even after operations tring value wont be chnaged
