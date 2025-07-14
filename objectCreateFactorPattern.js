const BookPrototype = {
  setPrice: function(price) {
    this.price = price;
  },
  getInfo: function() {
    return `${this.title} by ${this.author}, $${this.price}`;
  }
};

function createBook(title, author, price) {
  const book = Object.create(BookPrototype);
  book.title = title;
  book.author = author;
  book.setPrice(price);
  return book;
}


const book2 = createBook("The Hobbit", "J.R.R. Tolkien", 18.99);
console.log(book2.getInfo());
