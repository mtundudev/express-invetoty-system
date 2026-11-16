import { user_create,update_user,delete_user,all_users,single_user, user_login } from "./user.service.js";
import { CreateUserSchema,UpdateUserSchema,ResponseUserSchema } from "./user.validation.js";
import z from "zod";




export async function create_user(req,res) {
    const data=CreateUserSchema.parse(req.body);
    const user= await user_create(data);
    const Response=ResponseUserSchema.parse(user);
    return res.status(200).json(Response);
}

export async function login_user(req,res) {
    const user= await user_login(req.body.email,req.body.password)
    return res.status(200).json(user)
    
}
export async function allusers(req,res) {
    const user=await all_users()
    const Response=z.array(ResponseUserSchema).parse(user)
    return res.status(200).json(Response)
    
}

export async function userbyid(req,res) {
    const user_id=Number(req.params.id);
    const user=await single_user(user_id);
    const Response=ResponseUserSchema.parse(user)
    return res.status(200).json(Response);
    
}
export async function userupdate(req,res) {
    const user_id=Number(req.params.id);
    const data=UpdateUserSchema.parse(req.body);
    const user=await update_user(user_id,data)
    const Response= ResponseUserSchema.parse(user)
    return res.status(200).json(Response)
}

export async function user_delete(req,res) {
    const user_id=Number(req.params.id);
    const user= await delete_user(user_id);
    return res.status(200).json(user)
}