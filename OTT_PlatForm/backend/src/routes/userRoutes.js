import express from "express";
import { isUserExitInDB , pushUser , validateToken } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/isUserExitInDB' , isUserExitInDB);
userRouter.post('/' , pushUser)
userRouter.get('/api/validateToken' , validateToken)


export {
    userRouter
}
