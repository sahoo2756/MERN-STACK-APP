import express from "express"
import { getVideo } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get('/' , getVideo)


export {videoRouter}

