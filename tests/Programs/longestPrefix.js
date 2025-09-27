

    function longestPrefix(arr){
        let long=arr[0];
        for(let i=0;i<arr.length;i++){
            if(!arr[i].startsWith(long)){
                long=long.slice(0,-1);
            }
        }
        return long;
    }

let words=["dogg","doggies","does","doggs"]
    console.log(longestPrefix(words));
