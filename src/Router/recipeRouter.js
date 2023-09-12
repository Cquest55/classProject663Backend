const express = require("express");
const { dbConfig } = require("../config/dbConfig");
const router = express.Router();

router.post("/insertRec", async (req, res) => {
    let db = new dbConfig();
    let newDocument = req.body;
    newDocument.date = new Date();
    await db.connect();
    try {
        let results = await db.recipes.insertOne(newDocument);
        res.json(results).status(204);
    } catch (error) {
        console.error("Error querying the collection:", error);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        await db.client.close(); // Close the MongoDB client when done
    }
});

router.delete("/delRec/:title", async (req, res) => {
    let db = new dbConfig();
    const query = { title: req.params.title };
    await db.connect();
    try {
        let results = await db.recipes.deleteOne(query);
        res.json(results).status(200);
    } catch (error) {
        console.error("Error querying the collection:", error);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        await db.client.close(); // Close the MongoDB client when done
    }
});

router.get("/recipes", async (req, res) => {
    let db = new dbConfig();
    await db.connect();
    try {
        let results = await db.recipes.find({}).limit(50).toArray();
        res.json(results).status(200);
    } catch (error) {
        console.error("Error querying the collection:", error);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        await db.client.close(); // Close the MongoDB client when done
    }
});

module.exports = router;
