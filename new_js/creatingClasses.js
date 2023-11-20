class Book{
    constructor(title, author, isInStock){
        this.title = title;
        this.author = author;
        this.isInStock = isInStock;
       // console.log(this);
    }
    toggleIsInStock(){
        this.isInStock = !this.isInStock ;
    }
    getPrototype(){
        console.log(Object.getPrototypeOf(this));
    }
}

const book1 = new Book('Unfinished', 'Priyanka Chopra', false);
const book2 = new Book('Harry Potter', 'J.k.Rowling', true);
console.log(book1);
console.log(book2);
book1.toggleIsInStock();
console.log(book1);
book1.getPrototype();