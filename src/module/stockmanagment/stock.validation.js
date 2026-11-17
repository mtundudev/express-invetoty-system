import z from "zod";


export const StockCreateSchema=z.object({
    productId:z.number(),
    type:z.enum(["IN","OUT"]),
    quantity:z.coerce.number().positive()
})

export const StockUpdateSchema=z.object({
    productId:z.number().optional(),
    type:z.enum(["IN","OUT"]).optional(),
    quantity:z.coerce.number().positive().optional()
})