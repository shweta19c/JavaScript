/* 
    Inequality operator: !=
    Strict Inequality operator: !==
*/
 
var currentPassword = "123243556";
var newPassword = "123243556";
console.log(newPassword != currentPassword);
newPassword = "password";
console.log(newPassword!=currentPassword);
 var currentPassword =" 1984";
 var newPassword = 1984;
 console.log(newPassword != currentPassword);
 console.log(1984 !== "1984" );

 console.log("myPassword123" != "myNewPassword101");

console.log(100 !== "100"); 

console.log("openSesame" !== 'openSesame'); 


/* 
    + operator
    
        Adding numbers together: addition operator
        Concatenate strings: concatenation operator
*/

console.log(5+5);
console.log("Note" + "book");
console.log(123 + " books");
console.log(1 + "2");
console.log("1" + "2");

/* 
    Addition assignment operator: += 
*/


/*var total = 0;

total += 100;

total = total + 50;

total = total + 100;

total = total + 75;

total = total + 75;

console.log(total);
*/

var total = 0;

total += 100;

total += 50;

total += 100;

total += 75;

total += 75;

console.log(total);

/* 
    Concatenation assignment operator: += 
*/

var story = "Once";

story += " upon";

story += " a";

story += " time";

story += "...";

console.log(story);

/* 
    Operator precedence 
*/

console.log(2 * 2 + 3);



/* 
    Operator associativity 
*/

console.log(60 / 6 / 2);     // left to right associativity

var someOtherNumber = 5;

var someNumber = someOtherNumber = 10; // right to left associativity

console.log(someNumber);



