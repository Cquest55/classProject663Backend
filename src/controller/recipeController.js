import {dbConfig} from "../config/dbConfig";


export async function createRecipe (title, ingredients){
    let config = new dbConfig();
    let properReturn = false;
    if(title === undefined || ingredients === undefined)
    {
        console.log("title or ingredients were not defined");
        return false;
    }

    try {

        const creationQuery = { title: title, ingredients: ingredients };
        await config.recipes.create(creationQuery);

        properReturn =  true;
    } catch (error){
        console.log(error)
        properReturn =  false;
    } finally {
        await config.client.close();
    }

    return properReturn;

}
export async function deleteRecipe (title){
    let config = new dbConfig();
    let properReturn = false;
    if(title === undefined)
    {
        console.log("title was undefined");
        return false;
    }

    try {

        const deletionQuery = { title: title};
        await config.recipes.deleteOne(deletionQuery);

        properReturn =  true;
    } catch (error){
        console.log(error)
        properReturn =  false;
    } finally {
        await config.client.close();
    }

    return properReturn;
}
