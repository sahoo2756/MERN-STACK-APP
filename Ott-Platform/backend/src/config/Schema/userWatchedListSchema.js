import mongoose from "mongoose";

const { Schema } = mongoose;

let userWatchedList_Model = null;

const makeUserWatchList_Schema = () => {
  try {
    const userWatchedListSchema = Schema(
      {
        email: {
          type: String,
          required: true,
          unique: true,
        },
        watchHistory: [
          {
            index: {
              type: Number,
              required: true,
            },
            url: {
              type: String,
              required: true,
            },
          },
        ],
      },
      { timestamps: true }
    );
    userWatchedListSchema.index(
      { email: 1, "watchHistory.index": 1 },
      { unique: true }
    );
    userWatchedList_Model = mongoose.model(
      "userWatchedList_Schema",
      userWatchedListSchema
    );

    return;
  } catch (error) {
    console.log(
      `Error ${error.message} [userWatchedList_Schema , makeUserWatchList_Schema()]`
    );
  }
};

export { makeUserWatchList_Schema, userWatchedList_Model };
