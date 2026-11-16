import z, { email } from "zod";


export const CreateUserSchema=z.object({
    fullname:z.string().min(3),
    email:z.string().email(),
    password:z.string(),
    role:z.enum(["ADMIN","MANAGER","STAFF"]).optional()

});

export const UpdateUserSchema=z.object({
    fullname:z.string().min(3).optional(),
    email:z.string().email().optional(),
    password:z.string().optional()

});

export const ResponseUserSchema=z.object({
    id:z.number(),
    fullname:z.string(),
    email:z.string().email(),
    isActive:z.boolean(),
    createdAt:z.date(),
    updatedAt:z.date(),
    role:z.enum(["ADMIN","MANAGER","STAFF"]).optional()



})

