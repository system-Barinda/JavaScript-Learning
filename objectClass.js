// function book (title,author) {
//     this.title = title;
//     this.author = author;
//     this.addMount = addMount;
// }
// function addMount(amount){
//     this.amount = amount;
// }

// let oneBook = new book("the woman strong","system sylvere barinda");
// oneBook.addMount(3000);
// console.log(oneBook);

function book(title,author){
    this.title = title;
    this.author = author;

}
book.prototype.addMount = function(amount){
    this.amount =amount;
};

let newP = new book("the woman strong","system sylvere barinda");
newP.addMount(100);
console.log(newP);