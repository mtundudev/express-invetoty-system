import { add_product,list_product,delete_product,update_product,single_product } from "./product.service.js";
import { CreateProductSchema ,ResponseProductSchema,UpdateProductSchema} from "./product.schemas.js";

export async function add(req,res) {
    const data=CreateProductSchema.parse(req.body);
    const product = await add_product(data);
    //const Response=ResponseProductSchema.parse(product)
    return res.status(201).json(product)
    
}
export async function all_products(req,res){
    const product =await list_product()
    return res.status(200).json(product)
}
export async function one_product(req,res) {
    const product_id=Number(req.params.id);
    const product=await single_product(product_id);
    return res.status(200).json(product)
}

export async function update(req,res) {
    const data=UpdateProductSchema.parse(req.body);
    const product_id=Number(req.params.id);
    const product= await update_product(data,product_id);
    return res.status(200).json(product)
    
}

export async function product_delete(req,res) {
    const product_id=Number(req.params.id);
    const product=await delete_product(product_id)
    return res.status(200).json(product)
    
}