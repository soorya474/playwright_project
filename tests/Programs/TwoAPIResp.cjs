const assert = require('assert');
const resp1={
  "status": "success",
  "data": {
    "user": {
      "id": 101,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Elm Street",
        "city": "New York",
        "zipcode": "10001",
        "geo": {
          "lat": "40.7128",
          "lng": "-74.0060"
        }
      }
    }
}
}
const resp2={
  "status": "success",
  "data": {
    "user": {
      "id": 1010,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Elm Street",
        "city": "New York",
        "zipcode": "10001",
        "geo": {
          "lat": "40.7128",
          "lng": "-74.0060"
        }
      }
    }
}
}
if(resp1.data.user.id === resp2.data.user.id){
    console.log("same")
}
else{
    console.log("not same")
}
const isEqual=JSON.stringify(resp1)=== JSON.stringify(resp2);
console.log(isEqual);
assert.deepEqual(resp1,resp2)
