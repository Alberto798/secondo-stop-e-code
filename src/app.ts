import { Mongoose } from "mongoose";
import { config } from "dotenv";
config() 
 

import { insertPost } from "./orm";
insertPost(
    "will aunting", 2006, "il genio ribelle", "Migliore"
)

console.log(insertPost)

import { getAllPosts } from "./orm";
getAllPosts()

console.log(getAllPosts)


import { addPost} from "./orm";
addPost("deep Impact", 1998, "catastrofico", "Mediocre")

console.log(addPost)