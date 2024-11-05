import { Body, Controller, Post, Delete, Param, Get, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController {
    constructor(private bookService: BookService) { }
    @Get("/get")
    getAllBooks(): object {
        return this.bookService.getAllBooks();
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
}