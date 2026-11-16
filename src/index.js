import express from "express";
import { router} from "./module/usermodule/user.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";


const app=express();
app.use(express.json())

app.use(router)

app.use(errorHandler)
app.get("/", (req,res)=>{
    return res.status(200).send("welcome to our project")
})

export default app;
