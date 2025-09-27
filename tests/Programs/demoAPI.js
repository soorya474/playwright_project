// If using Node.js version < 18, install node-fetch:
// npm install node-fetch
// const fetch = require('node-fetch');

const baseURL = 'https://petstore3.swagger.io/api/v3';

const petPayload = {
  id: 123456789,
  name: "Rocky",
  category: {
    id: 1,
    name: "Dogs"
  },
  status: "available"
};

async function apiCalls() {
  try {
    // POST request to create pet
    const createResp = await fetch(`${baseURL}/pet`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petPayload)
    });

    const createData = await createResp.json();
    console.log("POST Response:\n", createData);

    // GET request to fetch pet with ID = 10
    const getResp = await fetch(`${baseURL}/pet/10`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    const getData = await getResp.json();
    console.log("GET Response:\n", getData);

    // Extract ID from response
    const id = getData.id;

    // DELETE request to remove pet
    const deleteResp = await fetch(`${baseURL}/pet/${id}`, {
      method: 'DELETE'
    });

    console.log(`Deleted pet with ID ${id}. Status: ${deleteResp.status}`);

  } catch (error) {
    console.error("Error:", error);
  }
}

console.log(apiCalls());
