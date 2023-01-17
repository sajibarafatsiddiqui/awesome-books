export default class Book {
  constructor(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
  }
}