/*
1/push():Adds single/multiple elemnets to end of array

*/

let numbers:number[]=[1,2,3,4,5];
numbers.push(6,7);

//2pop()>>move sthe last element form the array
numbers.pop();
//3.shift()>>remove sthe first element from the array and returns the removed number
//4.unshift()>>add single/multiple to the start of the array
//5.concat()>>merge 2 or more arrays
numbers.unshift(10,100)
console.log(numbers);
numbers.concat([8.9],[10,45])

//6.slice()>>extracts section of an array
numbers.slice(1,3)//ending index value wont be taken)
//7.splice()>>add/remove anywhere from an array
//Syntax:array.splice(starting index,number of elements to be removed,elemnts to be added)
//8.indexOf-finds the index of an elet>>if elt not found it returns -1
//9.includes()>>checks if an elemnet exists
//10.toString()>>converts an array to string

let myArray:string[]=["a","l","m","numbers","b"];
console.log(myArray);

let str:string=myArray.toString();
console.log(str)