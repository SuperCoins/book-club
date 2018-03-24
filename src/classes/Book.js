const pathToCovers =  require.context('@/assets/covers', true);

export default class Book {

  constructor(isbn, title, author, description,
  goodreadsLink, published, pages, goodreadsRating) {
    this.ISBN = isbn;
    this.Title = title;
    this.Author = author;
    this.Description = description;
    this.Cover = this.getCover(this.ISBN);
    this.GoodreadsLink = goodreadsLink;
    this.Published = published;
    this.GoodreadsRating = goodreadsRating;
    this.Pages = pages;
  }

  getCover(isbn) {
    return pathToCovers('./' + isbn + '.jpg', true) || null;
  }
};
