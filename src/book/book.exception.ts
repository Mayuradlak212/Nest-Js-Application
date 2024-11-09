import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
    constructor(){
        super("Book not found", HttpStatus.FORBIDDEN);
    }
}