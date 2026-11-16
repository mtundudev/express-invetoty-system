import { decode_token } from "../module/usermodule/user.token.js";
import AppError from "./errorHandler.js";

export async function protectedRouter(req,res,next) {
    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")){
        throw new AppError("access denied",401)
    }
    const token=authHeader.split(" ")[1];
    const payload=await decode_token(token)
    if (!payload){
        throw new AppError("access denied",401)
    }
    req.user= payload;
    next()

    
}