import mongoose from "mongoose";

const { Schema } = mongoose;

let creatorDBModel = null;

function makeCreatorSchema() {
  try {
    const creatorDBSchema = Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    });

    creatorDBModel = mongoose.model("creatorDB" , creatorDBSchema)
    
  } catch (error) {
    console.log('Error at creatorDBSchema = ' , error.message)
  }
}


export {makeCreatorSchema , creatorDBModel}