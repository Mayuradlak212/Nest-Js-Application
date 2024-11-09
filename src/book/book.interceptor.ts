import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";  // Correct import path
import { Request, Response } from "express";

@Injectable()
export class BookInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log("This is Interceptor");
        
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse<Response>();
        
        req.body.name = "Mayur Adlak";

        return next.handle().pipe(
            map((data) => {  // Corrected syntax here
                return "Hello From Interceptor"+data;
            })
        );
    }
}
