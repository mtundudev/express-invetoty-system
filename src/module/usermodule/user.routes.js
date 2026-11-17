import express from "express";
import { allusers, create_user, login_user, user_delete, userbyid, userupdate } from "./user.controller.js"
import { protectedRouter } from "../../middleware/auth.middleware.js";



const router=express.Router()


router.post("/create",create_user)

router.post("/user/login",login_user)

router.get("/users",protectedRouter,allusers)

router.get("/user/:id",protectedRouter,userbyid)

router.put("/user/:id",userupdate)

router.delete("/user/:id",user_delete)

export default router;