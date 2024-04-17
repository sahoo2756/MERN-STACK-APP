import express from "express"
import { pushWatchURL , getWatchHistory } from "../controllers/pushWatchURLController.js";


const userWatchHistoryRouter = express.Router()

userWatchHistoryRouter.post('/', pushWatchURL);
userWatchHistoryRouter.get('/', getWatchHistory);



export {userWatchHistoryRouter}

