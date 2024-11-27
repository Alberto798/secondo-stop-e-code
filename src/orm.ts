import mongoose from "mongoose";

import { Posts } from "./posts";

const connect = process.env.STRING_CONNECTION!

export const insertPost = async (

    titolo: string,
    anno : number,
    descrizione: string,
    valutazione: string
) => {

    try {
        await mongoose.connect(connect, { dbName : "POST"});
        const post = new Posts()
        post.titolo = titolo;
        post.anno = anno;
        post.descrizione = descrizione;
        post.valutazione = valutazione;
     
        return await post.save()
      
    } catch(err){
        console.error(err)
        
    } finally {
        await mongoose.disconnect()
    }
    
    
}

export const getAllPosts = async () => {
    try {
        await mongoose.connect(connect, { dbName : "POST"});
        
        return await Posts.find()
      
    } catch(err){
        console.error(err)
        
    } finally{
        await mongoose.disconnect()
    }
    

}

export const updatePost = async (id: string, titolo: string, anno : number, descrizione: string, valutazione: string) => {
    try {
        await mongoose.connect(connect, { dbName : "POST"});
        
        const post = await Posts.findById(id)  //cerca in base all'id
        
            if (!post) {                              //se non trovo l'id avviene un errore e in questo caso finisce direttamante nel catch
                 throw new Error("Post not found")    

            }

            post.titolo = titolo;
            post.anno = anno;
            post.descrizione = descrizione;
            post.valutazione = valutazione;

            return await post.save()
        
            } catch(err){
                console.error(err)
            } finally{
                await mongoose.disconnect()
            }}


export const deletePost = async (id: string) => {

    try {

        await mongoose.connect(connect, { dbName : "POST"});

        return await Posts.findByIdAndDelete(id)

    } catch(err){
        console.error(err)
    } finally{
        await mongoose.disconnect()
    }

}
