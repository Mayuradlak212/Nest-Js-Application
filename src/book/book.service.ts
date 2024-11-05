import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuid} from "uuid"
@Injectable()
export class BookService{
public books:Book[]=[];

createBookService(book:Book):object{
    const bookData={...book,id:uuid()};
this.books.push(bookData);
return {
    message: "Book Created Successfully",
    data: bookData
};
}
updateBookService(book:Book):object{
    let index = this.books.findIndex(b=>b.id === book.id);
    if(index !== -1){
        this.books[index] = book;
        return {
            message: "Book Updated Successfully",
            data: book
        };
    }else{
        return {
            message: "Book not found",
            data: null
        };
    }
}

deleteBookService(id:string):object{
   this.books=this.books.filter(book => book.id != id);
   return {
    message: "Book Deleted Successfully",
    data: null
};
}


getBookService(id:string):object{
    let book = this.books.find(b=>b.id === id);
    if(book){
        return {
            message: "Book Found",
            data: book
        };
    }else{
        return {
            message: "Book not found",
            data: null
        };
    }
}
getAllBooks():object{
    return {
        message: "All Books",
        data: this.books
    };
}
}