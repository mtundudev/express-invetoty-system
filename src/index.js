import express from "express";
import routeruser from "./module/usermodule/user.routes.js";
import routerproduct from "./module/products/routes.js";
import routercategory from "./module/categories/categories.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";


const app=express();
app.use(express.json())

app.use(routeruser)
app.use(routerproduct)
app.use(routercategory)

app.use(errorHandler)
app.get("/", (req,res)=>{
    return res.status(200).send("welcome to our project")
})

export default app;
