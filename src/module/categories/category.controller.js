import z from "zod";
import { new_categories,allcategories,deletecategory,updatecategory,categorybyid } from "./cotegory.service.js";

const CategorySchema=z.object({
    name:z.string().min(3),
})

export async function create_categories(req,res) {
    const data=CategorySchema.parse(req.body);
    const category=await new_categories(data)
    return res.status(201).json(category)
    
}

export async function list_category(req,res) {
    const category=await allcategories()
    return res.status(200).json(category)
    
}


export async function onecategory(req,res) {
    const category_id=Number(req.params.id)
    const category=await categorybyid(category_id);
    return res.status(200).json(category)
    
}


export async function category_update(req,res) {
    const category_id=Number(req.params.id);
    const data=CategorySchema.parse(req.body);
    const category=await updatecategory(category_id,data)
    return res.status(200).json(category)

}

export async function category_delete(req,res) {
    const category_id=Number(req.params.id)
    const category=await deletecategory(category_id);
    return res.status(200).json(category)
    
}