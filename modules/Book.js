import { v4 as uuidv4 } from 'uuid';

export default class Book {
    constructor(id,title,author){
        this.id = uuidv4();
        this.title = title;
        this.author = author;
    }
}