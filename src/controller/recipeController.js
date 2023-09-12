import {dbConfig} from "../config/dbConfig";


export function getAllRecipes(req, res){
    let db = new dbConfig();
    let collection = db.database.collection("posts");
    let results = collection.find({},(err) => {
        if(err){
            res.send(err);
        }
    })
        .limit(50)
        .toArray();
    res.send(results).status(200);
}

