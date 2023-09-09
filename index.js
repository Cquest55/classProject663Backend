const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://brandonlj8:Sophia11@cluster0.kqoflbh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('Recipe');
        const recipes = database.collection('Recipe');

        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'goulasch' };
        const recipe = await recipes.findOne(query);

        console.log(recipe.title);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);