const { MongoClient } = require("mongodb");

class dbConfig {
    constructor() {
        this.userName = "brandonlj8";
        this.password = "Sophia11";
        this.connString = "mongodb+srv://" + this.userName + ":" + this.password + "@cluster0.kqoflbh.mongodb.net/?retryWrites=true&w=majority";
        this.client = new MongoClient(this.connString);
        this.database = null;
        this.recipes = null;
    }

    async connect() {
        try {
            await this.client.connect();
            this.database = this.client.db('Recipe');
            this.recipes = this.database.collection('Recipe');
        } catch (error) {
            console.error("Error connecting to the database:", error);
        }
    }
}

module.exports = { dbConfig };