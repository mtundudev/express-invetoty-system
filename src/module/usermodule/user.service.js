
import prisma from "../../config/database.js";
import AppError from "../../middleware/errorHandler.js";
import bcrypt from "bcryptjs";
import { create_access_token } from "./user.token.js";


export async function user_create(data) {
    const hashedpassword=await bcrypt.hash(data.password,10)
    const user=prisma.user.create({
        data:{
            ...data,
            password:hashedpassword
        },
        
    });

    return user
    
}

export async function all_users() {
    const user= await prisma.user.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
    return user
}

export async function single_user(user_id) {
    const user =await prisma.user.findUnique({
        where:{
            id:user_id
        }
    })
    if (!user){
        throw new AppError(`user with id ${user_id} not found`) 
    }
    return user
    
}

export async function update_user(user_id,data) {
    const existuser =prisma.user.findUnique({
        where:{
            id:user_id
        }
    })
    if (!existuser){
        throw new AppError(`user with id ${user_id} not found`)
    }
    const user=prisma.user.update({
        where:{
            id:user_id,   
        },
        data
    });
    return user    
    
}
export async function delete_user(user_id) {
    const existuser = await prisma.user.findUnique({
        where:{
            id:user_id
        }
    })
    if (!existuser){
        throw new AppError( `user with id ${user_id} not found`)
    }
    const user=await prisma.user.delete({
        where:{
            id:user_id
        }
    })
    return "user deleted successfuly"    
}


export async function user_login(email,passsword) {
    const user=await prisma.user.findUnique({
        where:{
            email,
        }
    })
    if (!user){
        throw new AppError("wrong email or password",404)
    }
    const isvalidpasword=await bcrypt.compare(passsword,user.password)
    if (!isvalidpasword){
        throw new AppError("wrong email or password vhdsdyrjs",404)
    }
    const token=await create_access_token({"sub":user.id})

    return {
        "access_token":token,
        "token_type":"Bearer"
    }

}