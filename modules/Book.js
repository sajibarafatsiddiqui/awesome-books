import v4 from '../node_modules/uuid/dist/esm-browser/v4.js';

export default class Book {
  constructor(title, author) {
    this.id = v4();
    this.title = title;
    this.author = author;
  }
}