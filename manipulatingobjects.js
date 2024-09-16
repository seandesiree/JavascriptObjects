function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  
  Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
  
  let library = [];
  
  function addBook(title, author, pages) {
    let book = new Book(title, author, pages);
    library.push(book);
    console.log(`${title} added to the library.`);
  }
  
  function searchByTitle(title) {
    let foundBooks = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBooks.length > 0) {
      console.log("Matching books found:");
      foundBooks.forEach(book => book.displayInfo());
    } else {
      console.log("No matching books found.");
    }
  }
  
  function searchByAuthor(author) {
    let foundBooks = library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    if (foundBooks.length > 0) {
      console.log("Matching books found:");
      foundBooks.forEach(book => book.displayInfo());
    } else {
      console.log("No matching books found.");
    }
  }
  
  function filterByPageCount(pages) {
    let filteredBooks = library.filter(book => book.pages > pages);
    console.log("Books with more than 100 pages:");
    filteredBooks.forEach(book => book.displayInfo());
  }
  
  function addPrefixToTitlesAndAuthors() {
    let modifiedBooks = library.map(book => {
      return {
        title: "Title: " + book.title,
        author: "Author: " + book.author,
        pages: book.pages
      }
    });
    modifiedBooks.forEach(book => book.displayInfo());
  }
  
  addBook("Book 1", "Author 1", 150);
  addBook("Book 2", "Author 2", 220);
  addBook("Book 3", "Author 3", 80);
  
  searchByTitle("book 1");
  searchByAuthor("author 2");
  
  filterByPageCount(100);
  addPrefixToTitlesAndAuthors();