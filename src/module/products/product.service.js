import prisma from "../../config/database.js";
import AppError from "../../middleware/errorHandler.js";


async function generate_sku(name) {
    const prefix=name.replace(/[^a-zA-Z]/g, "").slice(0,3).toUpperCase();
    const sku=`${prefix}`
    return sku
}

export async function add_product(data) {
    const product=await prisma.product.create({
        data:{
            ...data,
            sku:await generate_sku(data.name)

        }
    })
    return product
    
}
export async function list_product() {
    const product=await prisma.product.findMany({
    });
    return product
    
}

export async function single_product(product_id) {
    const product=await prisma.product.findUnique({
        where:{
            id:product_id,
        }
    });
    if (!product){
        throw new AppError(`product with id of ${product_id} not found`)
    }
    return product
    
}

export async function update_product(data,product_id) {
    const existproduct=await prisma.product.findUnique({
        where:{
            id:product_id,
        }
    });
    if (!existproduct){
        throw new AppError(`product with id of ${product_id} not found`)
    }    
    const product=await prisma.product.update({
        where:{
            id:product_id
        },
        data
    });
    return product
    
}

export async function delete_product(product_id) {
    const existproduct=await prisma.product.findUnique({
        where:{
            id:product_id,
        }
    });
    if (!existproduct){
        throw new AppError(`product with id of ${product_id} not found`)
    }    
    const product=await prisma.product.delete({
        where:{
            id:product_id
        }
    });
    return {
        "message":"product deleted successfuly"
    }
}