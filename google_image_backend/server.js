const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 5500;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Define route to fetch images from SerpApi Google Image API
app.get("/api/images", async (req, res) => {
  try {
    const { query } = req.query; // Get query from request URL
    const apiKey =
      "404bc64f2fc05cdbbf23575e811354b405b9c6cb9cf379d3f0afd6ccbda7b991"; // Your SerpApi API key

    const params = {
      api_key: apiKey,
      engine: "google",
      q: query,
      google_domain: "google.com",
      hl: "en",
      tbm: "isch",
      safe: "active",
      num: 3,
    };

    // Make GET request to SerpApi Google Image API
    const response = await axios.get("https://serpapi.com/search", {
      params: params,
    });
    const imageResults = response.data;

    // Send the image URLs to the client
    res.json(imageResults);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
