import { Body, Controller, Post, Delete, Param, Get, Put, BadGatewayException, HttpException, HttpStatus, UseFilters, UseGuards, UseInterceptors, Req, Res } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { error } from "console";
import { BookException } from "./book.exception";
import { BookExceptionFilter } from "./book.exception.filter";
import { BookGuard } from "./book.guard";
import { BookInterceptor } from "./book.interceptor";
import { Request, Response } from "express"
@Controller("book")
export class BookController {
    constructor(private bookService: BookService) { }
    @Get("/get")
    @UseFilters(BookExceptionFilter)
    @UseGuards(BookGuard)
    getAllBooks(): any {
        try {
            throw new BadGatewayException();

            //    return this.bookService.getAllBooks();
        } catch (error) {
            throw new BadGatewayException();

        }
    }

    @Put("/update")
    updateBook(@Body() book: Book): object {
        return this.bookService.updateBookService(book);
    }
    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string): object {
        return this.bookService.deleteBookService(bookId);
    }

    @Post("/create")
    createBook(@Body() book: Book): object {
        return this.bookService.createBookService(book);
    }

    @UseInterceptors(BookInterceptor)
    @Post("/add")
    addBook(): string {
        console.log("Name from Interceptor : ")
        return "Hello World";
    }
}