class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;

    }
 };
 
 export function errorHandler(err,req,res,next){
    const status=err.statusCode ||500;
    res.status(status).json({
        message:err.message
    });
 }

 export default AppError