// api.js

const fetchData = async (query) => {
    let url = `https://newsapi.org/v2/everything?q=${query}&from=2023-11-08&to=2023-11-08&sortBy=popularity&apiKey=aa4bda5624e34906838f036d6a290e5e`;
  
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data.articles;
    } catch (error) {
      console.error('An error occurred:', error);
      return [];
    }
  };
  
  export default fetchData;
  