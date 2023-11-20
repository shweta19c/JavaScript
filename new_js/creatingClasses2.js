/*
Task:
1. Create a new class called 'Computer' which takes 3 parameters:
    make, model, price.
2. Create a method which logs out a phrase summarising the object. 
   For example: This Apple Macbook cost $1800.
3. Create a new instance of Computer passing in the details for 
   whatever computer you are working on right now.
*/

class Computer{
    constructor(make, model, price){
        this.make = make;
        this.model = model;
        this.price = price;
        console.log(this);
    }

    summerize(){
        console.log(`This Apple Macbook cost $${this.price}.`);
    }
}
const mac = new Computer('Apple','Macbook',1800);
mac.summerize();