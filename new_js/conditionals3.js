/* Task 2: using a switch statement 

Imagine you're writing the code for a restaurant's website. Every weekday, the 
restaurant has a different daily special. On the weekends, it does not have any daily
special. The schedule is as follows: 

            Monday: Chili Lime Tacos 
            Tuesday: Cauliflower Pizza
            Wednesday: Hawaiian Hot Dogs 
            Thursday: Grilled Beet Burger 
            Friday: Sweet Potato Curry Falafel
            Saturday & Sunday: no specials 

    1. Write a switch statement that checks the day of the week (using the day variable 
       below) and console.logs the daily special corresponding to the current day. 
    2. If there is no special for the current day, the default output should be "No 
       daily special today."
    3. Go through each one of the test cases below and check if you get the correct 
       output in the console.  
 */

       var day;

       /* Test cases */
       //day = "Monday"; //expected result: "Chili Lime Tacos"
       //day = "Tuesday"; //expected result: "Cauliflower Pizza"
       //day = "Wednesday"; //expected result: "Hawaiian Hot Dogs"
       //day = "Thursday"; //expected result: "Grilled Beet Burger"
       //day = "Friday"; //expected result: "Sweet Potato Curry Falafel"
       //day = "Saturday"; //expected result: "No daily special today."
       //day = "Sunday"; //expected result: "No daily special today."
       
       
       /* Write your code below here */
       day = "Sunday";
       switch(day){
        case "Monday":
            console.log("Chili Lime Tacos ");
            break;
        case "Tuesday":
            console.log("Cauliflower Pizza");
            break;
        case "Wednesday":
            console.log("Hawaiian Hot Dogs");
            break;
        case "Thursday":
            console.log("Grilled Beet Burger");
            break;
        case "Friday":
            console.log("Sweet Potato Curry Falafel");
            break;
        default:
            console.log("No daily special today.");
            break;
       }