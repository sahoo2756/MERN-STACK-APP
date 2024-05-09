import express from "express"
import { pushWatchHistory , getWatchHistory } from "../controllers/pushWatchURLController.js";


const userWatchHistoryRouter = express.Router()

userWatchHistoryRouter.post('/', pushWatchHistory);
userWatchHistoryRouter.get('/', getWatchHistory);




export {userWatchHistoryRouter}

