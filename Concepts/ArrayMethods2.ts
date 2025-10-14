//forEach(),filter(),map(),reduce()>>this accepts function as aparameter

//forEach()-executes function once for each array elemnet

//Syntax:array.forEach(function(current vale,index,array){})
let fruits:string[]=["apple","banana","orane"];
// fruits.forEach(function(el,index){
//     console.log(`${el}`,`${index}`);
// })
//for each using arrow functions
fruits.forEach((el)=>{
    console.log(el.toUpperCase);
})

