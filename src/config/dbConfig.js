const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.


export class dbConfig {
     userName = "brandonlj8";
     password = "Sophia11";
     connString = "mongodb+srv://" + this.userName + ":" + this.password + "@cluster0.kqoflbh.mongodb.net/?retryWrites=true&w=majority";
     client  = "";
     database = "";
     recipes = "";

    constructor() {
        this.client = new MongoClient(this.connString);
        this.database = this.client.db('Recipe');
        this.recipes = this.database.collection('Recipe');
    }

}

