fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>{
    if(!response.ok){
        throw new Error("Response failed"+response.status)
    }
    return response.json;
}).then(data=>{
    console.log("api response",data);
})