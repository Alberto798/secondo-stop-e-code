import mongoose from "mongoose";

import { Posts } from "./posts";

export const insertPost = async (

    titolo: string,
    anno : number,
    descrizione: string,
    valutazione: string
) => {

    try {
        await mongoose.connect(process.env.STRING_CONNECTION!, { dbName : "POST"});
        const post = new Posts()
        post.titolo = titolo;
        post.anno = anno;
        post.descrizione = descrizione;
        post.valutazione = valutazione;
     
        return await post.save()
      
    } catch(err){
        console.error(err)
        
    } finally {
        mongoose.connection.close();
    }
    
    
}

export const getAllPosts = async () => {
    try {
        await mongoose.connect(process.env.STRING_CONNECTION!, { dbName : "POST"});
        
        return await Posts.find()
      
    } catch(err){
        console.error(err)
        
    } finally {
        mongoose.connection.close();
    }
    

}

export const updatePost = async ( titolo: string, anno : number, descrizione: string, valutazione: string) => {
    try {
        await mongoose.connect(process.env.STRING_CONNECTION!, { dbName : "POST"});
        
        const post = await Posts.updateOne({
            titolo,
            anno,
            descrizione,
            valutazione
        }, {new: true})
} catch(err){
    console.error(err)
} finally{
    mongoose.connection.close();
}}
