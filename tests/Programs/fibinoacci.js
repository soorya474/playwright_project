
function fibinoacci(num){
    let a=0;
    let b=1;
    let count=0;
    console.log(a+" "+b);
    while (count<=num){
        let c=a+b;
        count++;
        console.log(c);
        a=b;
        b=c;
    }
}
fibinoacci(6)