/* 
    🐶 Pet Dog Simulator 🐶

Tasks:
    1. Declare a new variable called petDog and assign it the value "Buddy". 
    2. Console.log the petDog variable.
    
Notes:          
    - Click the "run" button to run your code.
    - Click the "console" button to open and close the console. 
    - Check the console to confirm whether you're getting the expected result.    
*/ 

var petDog = "Buddy";
console.log(petDog)

/* 3. Console.log the string "My pet dog's name is: " and the petDog variable, 
concatenating them into a single message. 

Expected result: "My pet dog's name is: Buddy"
*/ 
console.log("My pet dog name is: ", petDog);
console.log("My pet dog name is: "+ petDog);

/*
    4. Declare another variable and name it dogSound. Assign the string of "woof" to it.
    5. Console.log the variable petDog, the string "says", and the variable 
       dogSound, using commas instead of the concatenation operator to join the three 
       together into a single message.
       
       Expected result: "Buddy says woof" (with slightly different formatting)
*/
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petDog + " is sleeping");
console.log(petDog, "is sleeping");

/* 
    6. Reassign the value stored in dogSound to the string "bark".
    7. Console.log the variable petDog, the string "now says", and the variable dogSound,
       again using commas to join the three together into a single message.
       
       Expected result: "Buddy now says bark" (with slightly different formatting)
*/
dogSound = "bark";
console.log(petDog, " now says", dogSound);