var hotel ={}

hotel.name = "Leela Agro farm";
hotel.price = 2000;
hotel.stars = 5;
hotel.isFull = false;

console.log(hotel);

hotel.summerizeHotel = function(){
    console.log("hotel Leela Agro farm is beautiful 5 star hotel");
}

hotel.summerizeHotel();
console.log(hotel);

/*
Task:
    1. Add a new method to the object called 'hotelClosed'.
    2. When called, this new method should log out the phrase 'I'm sorry, 
       the hotel is currently closed.'
    3. Call the method to check it works.
*/

hotel.hotelClosed = function(){
    console.log("I'm sorry, the hotel is currently closed.");
}

hotel.hotelClosed();