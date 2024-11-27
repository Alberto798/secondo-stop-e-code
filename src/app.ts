import { Mongoose } from "mongoose";
import { config } from "dotenv";
config() 
 

import * as orm from "./orm";

orm.insertPost(
    "will aunting", 2006, "il genio ribelle", "Migliore"
).then(r => {                        //per il fatto che è una promise bisogna poi mettere il then per vedere il risultato della funzione
    console.log(r)
})