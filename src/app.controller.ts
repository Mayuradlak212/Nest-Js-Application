import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { CreateBook } from "./book.dto";

@Controller("book")
export class BookController {
  @Post("/create")
  createBook(@Body()createBook:CreateBook):object{
    console.log(createBook);
    return createBook;
  }
  @Delete("/delete")

  deleteBook ():string{
    return "Book Deleted Successfully";
  }
  @Put("/update")
  updateBook (@Query("id") id: string):string{
    return "Book Updated Successfully"+id;
  } 
  @Get("/find")
  @HttpCode(200)
  @Header("Cache-Control", "none")
  getAllBook ():object{
    return {
      data:["Book is Here"],
      status:200,
      error:null,
      message:"Data Fetched Successfully"
    };
  }
  @Get("/book/:id")  // Endpoint to get book by id. Replace :id with the actual id.
  getBookById (@Param("id") id: string): string{
    return `Book with id ${id} fetched successfully`;
  }

}