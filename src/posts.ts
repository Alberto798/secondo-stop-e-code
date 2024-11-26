import mongoose from "mongoose";

interface Posts {

    titolo: string;
    anno : number;
    descrizione: string;
    valutazione: string;

}

const schemaPost = new mongoose.Schema<Posts>({
    titolo: {type: 'string', required: true}, //se metto le graffe vengono aggiunte altre informazioni quando non ne basta una 
    anno: {type: Number, required: true},
    valutazione: {type: String, enum: ["Buona", "Mediocre", "Migliore"]}, //solo i valori "Buona", "Mediocre", "Migliore" sono ammessi
    descrizione: {type: String},

})

export const Posts = mongoose.model<Posts>("Post", schemaPost, "posts")