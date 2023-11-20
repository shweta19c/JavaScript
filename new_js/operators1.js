/* 
    Logical AND operator: && 
*/

var currentTime = 15;
console.log(currentTime < 17 && currentTime > 12)
currentTime=20;
console.log(currentTime < 17 && currentTime > 12)
console.log(true&&false);

/* 
    Logical OR operator: || 
*/
 currentTime =7;
console.log(currentTime< 9 || currentTime > 17);
console.log(true|| false)
console.log(false||true)
console.log(false||false)
currentTime =20;
console.log(currentTime< 9 || currentTime > 17);

/* 
    Logical NOT operator: ! 
*/

var dogHungry = true;
console.log("Dog is hungry: ",dogHungry);
console.log("Dog is eating");
console.log("Dog is hungry:", !dogHungry);
console.log("Dog is hungry:", !true);
dogHungry = !dogHungry;
console.log(dogHungry);
dogHungry = !dogHungry;
console.log(dogHungry);

/* 
    Modulus operator: %
    24 candies
    5 children
*/
 24%5;
 console.log(24%5);

 /* 
    Equality operator: == 
    Strict Equality operator: ===
*/
 var orderRefNUm = 1234567;
 var userInput = 1234567;

 console.log(orderRefNUm == userInput);
 userInput = 123456;
 console.log(orderRefNUm == userInput);
 userInput = "1234567";
 console.log(orderRefNUm == userInput);
 console.log(orderRefNUm===userInput);
 console.log("1234567" === "1234567");
 
 console.log(5 === '5'); //

console.log (10 === 10);

console.log (20 == "20");

console.log('cat' === "cat");

console.log("cat" == "Cat"); 



