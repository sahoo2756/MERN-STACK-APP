import mongoose from "mongoose";

const { Schema } = mongoose;

let userModel = null;
const makeUserSchema = () => {
  try {
    const userSchema = Schema(
      {
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
      },
      { timestamps: true }
    );

    userModel = mongoose.model("userSchema", userSchema);

    return;
  } catch (error) {
    console.log(`Error ${error.message} [userSchema , makeUserSchema()]`)
  }
};

export { makeUserSchema, userModel };
