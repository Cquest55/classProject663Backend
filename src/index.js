const express = require("express");
const app = express();
const recipeRouter = require("./Router/recipeRouter"); // Update the path based on your project structure

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//REST API
app.get('/apiRec', recipeRouter);



