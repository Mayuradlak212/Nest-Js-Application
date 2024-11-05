import {Injectable,NestMiddleware}  from "@nestjs/common";
import {R} from "express"
@Injectable()
export class BookMiddleware implements NestMiddleware {
   use(req:Request,res:Response,next:NextFunction){
    throw new Error("Method not implemented")
   }
}