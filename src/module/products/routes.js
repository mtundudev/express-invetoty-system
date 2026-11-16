import { add ,product_delete,one_product,all_products,update} from "./product.controller.js";
import express from "express"


const router=express.Router()

router.post("/products",add)

router.get("/products",all_products)

router.get("/products/:id",one_product)

router.put("/products/:id",update)

router.delete("/products/:id",product_delete)


export default router;