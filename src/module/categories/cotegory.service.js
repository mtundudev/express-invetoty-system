import prisma from "../../config/database.js";
import AppError from "../../middleware/errorHandler.js";


export async function new_categories(data) {
    const categoryexist= await prisma.categories.findFirst({
        where:{
            name:data.name
        },
    });
    if (categoryexist){
        throw new AppError("already category exist",400)
    }
    const category=await prisma.categories.create({
        data
    });
    return category
    
}

export async function allcategories() {
    const category=await prisma.categories.findMany({
        orderBy:{
            createdAt:"desc"
        }
    });
    return category
}
export async function categorybyid(category_id) {
    const category=await prisma.categories.findUnique({
        where:{
            id:category_id
        },
    });
    if (!category){
        throw new AppError(`category with id of ${category_id} not found`)
    }
    return category
}

export async function updatecategory(category_id,data) {
    const categoryid=await prisma.categories.findUnique({
        where:{
            id:category_id
        },
    });
    if (!categoryid){
        throw new AppError(`category with id of ${category_id} not found`)
    }
    const categoryname=await prisma.categories.findFirst({
        where:{
            name:data.name
        },
    });
    if (categoryname){
        throw new AppError("categories already exist",400)
    }
    const category=await prisma.categories.update({
        where:{
            id:category_id
        },
        data
    });
    return category
    
}

export async function deletecategory(category_id) {
    const Iscategory_id=await prisma.categories.findUnique({
       where:{
        id:category_id
       }
    });
    if (!Iscategory_id){
        throw new AppError(`category with id of ${category_id} not found`)
    }    
    const category =await prisma.categories.delete({
        where:{
            id:category_id
        },
    });

    return {
        "message":"categories deleted successfuly"
    }
    
}