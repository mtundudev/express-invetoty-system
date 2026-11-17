import express from "express"
import { category_delete, category_update, create_categories, list_category, onecategory } from "./category.controller.js"


const router=express.Router()


router.post("/category",create_categories)

router.get("/category",list_category)

router.get("/category/:id",onecategory)

router.put("/category/:id",category_update)

router.delete("/category/:id",category_delete)

export default router