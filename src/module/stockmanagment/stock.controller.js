import { createstock,update_stock,list_stock,stocknyId,delete_stock } from "./stock.service.js";
import { StockCreateSchema,StockUpdateSchema } from "./stock.validation.js";


export async function create_stock(req,res) {
    const data=StockCreateSchema.parse(req.body);
    const stock=await createstock(data);
    return res.status(201).json(stock)
    
}

export async function all_stock(req,res) {
    const stock=await list_stock()
    return res.status(200).json(stock);
}

export async function onestock(req,res) {
    const stock_id=Number(req.params.id)
    const stock=await stocknyId(stock_id)
    return res.status(200).json(stock)
}

export async function stock_update(req,res) {
    const data=StockUpdateSchema.parse(req.body);
    const stock_id=Number(req.params.id);
    const stock=await update_stock(data,stock_id);
    return res.status(200).json(stock)
}

export async function stock_delete(req,res) {
    const stock_id=Number(req.params.id);
    const stock=await delete_stock(stock_id)
    return res.status(200).json(stock)
}