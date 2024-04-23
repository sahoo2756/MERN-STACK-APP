import express from "express"
import { pushWatchDetails , getWatchDetails } from "../controllers/pushWatchURLController.js";


const userWatchHistoryRouter = express.Router()

userWatchHistoryRouter.post('/', pushWatchDetails);
userWatchHistoryRouter.get('/', getWatchDetails);



export {userWatchHistoryRouter}

