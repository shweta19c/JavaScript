/*
Task:
    1. Write a constructor function called 'Attraction' that 
       creates objects with details of a tourist attraction 
       (name, price, description).
    2. Add a method to that constructor which summarises the 
       attraction.
       
    When calling that method, you should get something like this:
    
    'Disneyland is a world famous theme park with hundreds of rides
    and activities. It costs $60 to enter.'
*/

function Attraction(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;

    this.summerize = function(){
        console.log(`Disneyland is a world famous theme park with hundreds of rides and activities. It costs $60 to enter.`);
    }

    }
const attraction1 = new Attraction('Disneyland',60,'fun activities');
attraction1.summerize();