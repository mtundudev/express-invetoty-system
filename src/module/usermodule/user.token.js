import jwt from "jsonwebtoken";
import AppError from "../../middleware/errorHandler.js";
import z from "zod";


export async function create_access_token(payload) {
    const token=jwt.sign(
        payload,process.env.JWT_SECRET || "ertyu9iuyfdcvboiiiiytr5e5i",
        {expiresIn:"10min"}
    )
    return token
    
}

export async function decode_token(token) {
    try{
        const payload=jwt.verify(token,process.env.JWT_SECRET || "ertyu9iuyfdcvboiiiiytr5e5i")
        return payload
    }catch(err){
        if (err.name=== "TokenExpiredError"){
            throw new AppError("Token Expired",401)
        }
    }
    throw new AppError("Anauthorized",401)

    
}