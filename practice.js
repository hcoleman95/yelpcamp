function books(title, author, pages, readBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return this.books;
  };
}
