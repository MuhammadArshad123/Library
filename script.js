let Library =[];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
  }
}

function addBookToLibrary(book) {
  Library.push(book);
}

function displayBooks(){
    Library.forEach(function(book){
      console.log(book.info());
    }, 
    this);
}