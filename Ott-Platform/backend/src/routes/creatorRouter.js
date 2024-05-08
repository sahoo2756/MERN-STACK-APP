import express from "express"
import newCreator from "../controllers/Creator/newCreator.controller.js";

const creatorRouter = express.Router();

console.log("createRouter")
creatorRouter.post('/' , newCreator)


export {creatorRouter}