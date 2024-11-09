import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, NextFunction,Response } from "express"
@Injectable()
export class BookMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {  
      const {host,method,url,protocol}=req;
      console.log("Request Information ",host,method,url,protocol);
        next()
    }
}