const express = require("express");
const app = express();
const port = 3000;


// Route setup
app.get("/", (req, res) => res.send("Hello world!"));

// Start server
app.listen(process.env.PORT || port, () =>

console.log("Server listening on port: ${port}")

);
