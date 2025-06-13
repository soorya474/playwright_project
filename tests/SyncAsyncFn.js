//Sync function
function print(string){
    console.log(string);
}
print("Start");
print("Stop");
print("End");

async function printAll(){
   await print("Start");
   await print("Stop");
   await print("End");
}