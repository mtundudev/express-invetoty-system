import prisma from "../../config/database.js";
import AppError from "../../middleware/errorHandler.js";




export async function createstock(data) {
    return await prisma.$transaction(
        async (tx) => {
            const product=await tx.product.findUnique({
                where:{
                    id:data.productId
                },
            });
            if (!product){
                throw new AppError(`product with id of ${data.productId} not found`)
            }
            if(data.type==="OUT" && product.quantity < data.quantity){
                throw new AppError("there is unsufficient quantity",400)
            }
            const mevements=await tx.stockMovement.create({
                data
            });
            let quantity
            if (data.type==='IN'){
                quantity=data.quantity;
            }
                else{
                    quantity=-data.quantity;
                }
            await tx.product.update({
                where:{
                    id:data.productId
                },
                data:{
                    quantity:{
                        increment:quantity
                    }
                }                
            });
            return mevements

        }
    )
    
}

export async function list_stock() {
    const stock= await prisma.stockMovement.findMany({

    });
    return stock
    
}

export async function stocknyId(stock_id) {
    const stock=await prisma.stockMovement.findUnique({
        where:{
            id:stock_id
        }
    });
    if (!stock){
        throw new AppError(`stock with id of ${stock_id} not found`)
    }
    return stock
}

export async function update_stock(data,stock_id) {
    const exist=await prisma.stockMovement.findUnique({
        where:{
            id:stock_id
        }
    });
    if (!exist){
        throw new AppError(`stock with id of ${stock_id } not found`)
    }
    const stock= await prisma.stockMovement.update({
        where:{
            id:stock_id
        },
        data
    });
    return stock
}

export async function delete_stock(stock_id) {
    const exist=await prisma.stockMovement.findUnique({
        where:{
            id:stock_id
        }
    })
    if (!exist){
        throw new AppError(`stock with id of ${stock_id} not found`)
    }
    await prisma.stockMovement.delete({
        where:{
            id:stock_id
        }
    });
    return {
        "message":"successfuly stock removed"
    }
    
}