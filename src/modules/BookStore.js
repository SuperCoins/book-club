import BookDataList from '@/assets/BookData.json';
import Book from '@/classes/Book.js';

function convertToBook(data) {
  return new Book(data.ISBN, data.Title, data.Author, data.Description, data.GoodreadsLink, data.Published, data.Pages, data.GoodreadsRating);
}

function getBook(isbn) {
  return convertToBook(BookDataList.find(book => {
    return book.ISBN == isbn;
  }));
}

function getAllBooks() {
  return BookDataList.map(convertToBook);
}

export default {
  getBook, getAllBooks
};
