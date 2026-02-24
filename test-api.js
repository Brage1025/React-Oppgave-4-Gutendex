import axios from "axios";

const testAPI = async () => {
  try {
    const response = await axios.get(
      "https://openlibrary.org/search.json?q=popular&limit=5",
    );
    console.log("API Response:", response.data);
    console.log(
      "Number of results:",
      response.data.docs ? response.data.docs.length : 0,
    );
  } catch (error) {
    console.error("API Error:", error.message);
  }
};

testAPI();
