import z, { number } from "zod";



export const CreateProductSchema=z.object({
    name:z.string(),
    description:z.string().optional(),
    //sku:z.string(),
    costprice:z.float32(),
    sellingprice:z.float32(),
})

export const UpdateProductSchema=z.object({
    name:z.string().optional(),
    description:z.string().optional(),
    sku:z.string().optional(),
    costprice:z.float32().optional(),
    sellingprice:z.float32().optional(),
})

export const ResponseProductSchema=z.object({
    id:z.number(),
    name:z.string(),
    description:z.string().optional(),
    sku:z.string(),
    costprice:z.float32(),
    sellingprice:z.float32(),
    createdAt:z.date(),
    updatedAt:z.date()
})