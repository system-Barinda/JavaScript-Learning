let bookProt = {
    setPrice : function(price){
       this.price = price;
    },
    getSammary:function(){
        return `${this.title} by written: ${this.author} and the price is : ${this.price}`;
    }
};

let book1 = Object.create(bookProt);
book1.author = "system sylvere";
book1.title = "the strong woman";
book1.setPrice(100);
console.log(book1.getSammary());