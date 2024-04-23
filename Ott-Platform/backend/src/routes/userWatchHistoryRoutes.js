import express from "express"
import { pushWatchDetails , pushWatchDetails } from "../controllers/pushWatchURLController.js";


const userWatchHistoryRouter = express.Router()

userWatchHistoryRouter.post('/', pushWatchDetails);
userWatchHistoryRouter.get('/', pushWatchDetails);



export {userWatchHistoryRouter}

