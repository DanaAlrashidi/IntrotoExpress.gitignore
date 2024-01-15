const express = require("express");
const app = express(); // my backend
const data = require("./data");
app.get("/api/products", (req, res) => {
  //this is my route
  return res.json(data);
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`I'm running on port ${PORT}`);
});
