import Book from './Book.js';

export default class BookList {   
    constructor(Books){
        this.Books = Books
    }
    addBook(title,author) {
            const addedBook = new Book(title,author);
            this.Books.push(addedBook);
    }
    removeBook(id){
        console.log(this.Books)
        this.Books.splice(id,1)

    }
}