const express = require("express");
const app = express();
const cors = require('cors'); // Import the cors middleware

const recipeRouter = require("./Router/recipeRouter"); // Update the path based on your project structure

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.use(cors());

const corsOptions = {
    origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));

//REST API
app.use('/apiRec', recipeRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




