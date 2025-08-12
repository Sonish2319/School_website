
// const BASE_URL = 'http://localhost:9000';


// export async function fetchAPI(endpoint, options = {}) {

//   const url = `${BASE_URL}${endpoint}`;

//   const BEARER_TOKEN = fetchLocalStorage('access');

//   const headers = {
//     "Content-Type": "application/json",
//   };

//   const config = {
//     method: options.method || "GET",
//     headers,
//     ...(options.body ? { body: JSON.stringify(options.body) } : {}),
//   };

//   try {
//     const response = await fetch(url, config);
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.detail || "API request failed");
//     }
//     return response.json();
//   } catch (error) {
//     // console.error("API Fetch Error:", error);
//     throw error;
//   }
// }


export async function fetchAPI(endpoint, options = {}) {
  const BASE_URL = 'http://localhost:9000'; // Hardcoded base URL for testing

  const url = `${BASE_URL}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    // Remove Authorization if not needed for now, or add if you want
  };

  const config = {
    method: options.method || "GET",
    headers,
    ...(options.body ? { body: JSON.stringify(options.body) } : {}),
  };

  try {
    const response = await fetch(url, config);
    const text = await response.text();
    console.log(`Response text from ${url}:`, text);

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}
