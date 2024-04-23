import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { userRouter } from "./routes/userRoutes.js";
import { videoRouter } from "./routes/videoRoute.js";
// import { userWatchHistoryRouter } from "./routes/userWatchHistoryRoutes.js";
import { makeUserSchema } from "./config/Schema/userSchema.js";
import {makeUserWatchList_Schema} from "./config/Schema/userWatchedListSchema.js"
import cookieParser from "cookie-parser";




dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173" , "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded({extended : false}))
// app.use
const PORT = process.env.PORT || 3000;

async function makeDB_Activated() {
  try {
    await connectDB();
    makeUserSchema();
    makeUserWatchList_Schema();
  } catch (error) {
    console.log(`Error at makeDB_Activated = ${error.message} [index.js]`);
  }
}
makeDB_Activated();

app.listen(PORT, () => {
  console.log(`Express Server Started At ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ msg: "This is Home Route" });
});

app.use("/users", userRouter);
app.use('/api/videos' , videoRouter)
// app.use('/api/watchHistory' , userWatchHistoryRouter)




