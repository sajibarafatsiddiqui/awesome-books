import BookList from './modules/BookList.js';
import { DateTime } from './luxon.js';

window.addEventListener('DOMContentLoaded', () => {
  const booksLink = document.querySelector('.list');
  const formsLink = document.querySelector('.add-new');
  const contactsLink = document.querySelector('.contact-link');
  const booksPage = document.querySelector('.book-list');
  const formsPage = document.querySelector('.form');
  const contactsPage = document.querySelector('.contact');
  const booksTitle = document.querySelector('.books-head');
  formsPage.classList.add('hide');
  contactsPage.classList.add('hide');

  const showListOnly = () => {
    formsPage.classList.add('hide');
    contactsPage.classList.add('hide');
    booksPage.classList.remove('hide');
    booksTitle.classList.remove('hide');
  };
  booksLink.addEventListener('click', showListOnly);
  const showContactOnly = () => {
    booksPage.classList.add('hide');
    formsPage.classList.add('hide');
    booksTitle.classList.add('hide');
    contactsPage.classList.remove('hide');
  }
  contactsLink.addEventListener('click', showContactOnly);

  const showFormOnly = () => {
    booksPage.classList.add('hide');
    contactsPage.classList.add('hide');
    booksTitle.classList.add('hide');
    formsPage.classList.remove('hide');
  };
  formsLink.addEventListener('click', showFormOnly);
});
const date = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
document.getElementById('date').innerHTML = date;
let container = []
if (JSON.parse(localStorage.getItem('Books'))){
    container = JSON.parse(localStorage.getItem('Books')).Books
}
const Books = new BookList(container);
const bookList = document.createElement('section');
bookList.className = 'book-list';
bookList.classList.add('show');
let bookIndex = 0;

Books.Books.forEach((Book) => {
  let bookClass = 'bookContainer';
  if (bookIndex % 2 === 1) {
    bookClass = 'bookContainer1';
  }
  const book = `
      <div class="${bookClass}" id="${Book.id}">
          <p>
          ${Book.title} by ${Book.author}
          </p>
          <button class="remove">Remove</button>
      </div>`;
  bookList.innerHTML += book;
  bookIndex += 1;
});

document.body.insertBefore(bookList, document.body.children[3]);

const addButton = document.querySelector('#add-book');
const removeButton = document.querySelectorAll('.remove');

const addBook = () => {
  const formTitle = document.querySelector('#title');

  const formAuthor = document.querySelector('#author');

  if (formAuthor.value && formTitle.value) {
    Books.addBook(formTitle.value, formAuthor.value);
    localStorage.setItem('Books', JSON.stringify(Books));
    formAuthor.value = '';
    formTitle.value = '';
    window.location.reload();
  }
};

const removeBook = (e) => {
  const bookId = e.target.parentNode.id;
  Books.removeBook(bookId);
  localStorage.setItem('Books', JSON.stringify(Books));
  window.location.reload();
};

addButton.addEventListener('click', addBook);
removeButton.forEach((element) => element.addEventListener('click', removeBook));
