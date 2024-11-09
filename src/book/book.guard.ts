import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
@Injectable()
export class BookGuard implements CanActivate {
    public key: string = "JKW)$)#Q%(f04j90t3";
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log("Guard activated")
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        const header = request.header("key");
        if (header == this.key) {
            console.log("User Authenticated Successfully");
            return true;
        }
        else {
            console.log("Failed to authenticate user");
             throw new BadRequestException();
        }

    }
}