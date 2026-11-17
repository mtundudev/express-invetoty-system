import { create_stock,all_stock,onestock,stock_delete,stock_update } from "./stock.controller.js";
import express from "express"


const router=express.Router()


router.post("/stock",create_stock)

router.get("/stock",all_stock)

router.get("/stock/:id",onestock)

router.put("/stock/:id",stock_update)

router.delete("/stock/:id",stock_delete)

export default router;