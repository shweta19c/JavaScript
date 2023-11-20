/* 

Task 2: Working with switch statements and loops 
  
    Imagine you're creating a racing video game, and you need to display
    the results of each race. There are 8 racers and therefore 8 places 
    in each race. The places need to be displayed as abbreviated 
    ordinal numbers — 1st, 2nd, 3rd, 4th, etc.
    
    1. Using a for loop and a switch statement, console.log 
       the places with abbreviated ordinal numbers from 1 to 8. 
    2. Check that your results appear as follow: 
        
        1st place
        2nd place
        3rd place
        4th place
        5th place
        6th place
        7th place
        8th place
  */

// first method
/*
  for(var i=1; i<=8; i++){
    switch(i){
    case 1:
        console.log(i + "st place");
        break;
    case 2:
        console.log(i + "nd place");
        break;
    case 3:
        console.log(i + "rd place");
        break; 
    default:
        console.log(i + "th place");

}
 }
*/

 //second method
 for(var i=1; i<=8; i++){
    var suffix = "";
    switch(i){
    case 1:
        suffix= "st ";
        break;
    case 2:
        suffix="nd ";
        break;
    case 3:
        suffix= "rd ";
        break; 
    default:
       suffix= "th ";
        break;
}
console.log(i + suffix + "place");
 }
