const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define a route
app.get("/", (req, res) => {
  // Render the 'index.ejs' template
  res.render("index", { title: "My Express App" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
