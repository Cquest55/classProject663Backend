const express = require("express");
const app = express();
const cors = require('cors'); // Import the cors middleware

const recipeRouter = require("./Router/recipeRouter"); // Update the path based on your project structure

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.use(cors());

const corsOptions = {
    origin: '*',
};

//NEEEDED BECAUSE SYSTEM WILL STOP WITHOUT
app.use(cors(corsOptions));

//ALL REQUEST ARE PARSED INTO JSON BIG PROBLEM IF MISSING
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//USE THIS TO LOG TO THE DEATH
app.use((req, res, next) => {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.originalUrl);
    console.log("Request Headers:", req.headers);
    console.log("Request Body:", req.body);
    next(); // Call the next middleware in the chain
});

// REST API routes
app.use('/apiRec', recipeRouter);

//USE THIS TO LOG TO THE DEATH
 app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

