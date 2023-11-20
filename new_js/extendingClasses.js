class Book{
    constructor(title, author, isInStock){
        this.title = title;
        this.author = author;
        this.isInStock = isInStock;
    }
    toggleIsInStock(){
        this.isInStock = !this.isInStock;
    }

    getPrototype(){
        console.log(Object.getPrototype(this));
    }
}

class RareBook extends Book{
    constructor(title, author, isInStock,location, isVerified){
        super(title, author, isInStock)
        this.location = location;
        this.isVerified = isVerified;
    }
    getLocation(){
        console.log(this.location);
    }
    toggleIsVerified(){
        this.isVerified = !this.isVerified;
        if(this.isVerified){
            console.log(`${this.title} has been verified by an Independent expert.`);
        }else{
            console.log(`${this.title} has not been verified by an Independent expert.`);
        }
    }
    toggleIsInStock(){
        super.toggleIsInStock()
        if(this.isInStock){
            console.log(`${this.title} is in stock.`);
        }else{
            console.log(`${this.title} is not in stock.`);
        }
    }
}
class BestSeller extends Book{
    constructor(title, author, isInStock, numberSold){
        super(title, author, isInStock)
        this.numberSold = numberSold;
    }
    numberSoldCount(){
        this.numberSold += this.numberSold;
    }
    toggleIsInStock(){
        super.toggleIsInStock()
        if(this.isInStock){
            console.log(`${this.title} is in stock and ${this.numberSold} number of copies sold.`);
        }
        else{
            console.log(`${this.title} is not in stock and ${this.numberSold} number of copies sold.`);
        }
    }
}
const book3 = new RareBook('Romeo and Juliet','William Shakespeare',false,'London',false);
console.log(book3);
book3.getLocation();
book3.toggleIsVerified();
book3.toggleIsInStock();
const book4 = new BestSeller('Atomic Habits','James Clear',false, 20000000);
console.log(book4);
book4.numberSoldCount();
book4.toggleIsInStock();

/*
Task:
    1. Extend the 'Book' class with a class called 'BestSeller'. 
    2. Give it a 'numberSold' parameter and assign that 
       parameter to 'this'.
    3. Add a method which increases the 'numberSold' by
       an integer it takes in when it is called.
    4. If the 'toggleIsInStock' method is called, it should 
       log out whether or not the book is in stock and the 
       number of copies sold.
*/