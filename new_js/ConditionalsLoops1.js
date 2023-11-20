/* 

Task 1: Working with if-else statements and loops 

    Imagine you're creating a wedding planning app. Someone is using the app 
    to help them plan the seating arrangements for a wedding reception. As 
    part of those arrangements, the user wants the placemats at the tables to 
    match the theme colors of the wedding, which are white, pink, and blue. There 
    are 10 placemats at each table. They want the first and last placemats 
    at each table to be white, and they want the rest of the placemats to 
    alternate between pink and blue. 
    
    1. Using a for loop and if-else conditional statements, console.log 
       the colors and their corresponding placemat numbers.  
    2. Check that your results appear as follows: 
    
        Placemat 1: white
        Placemat 2: pink
        Placemat 3: blue
        Placemat 4: pink
        Placemat 5: blue
        Placemat 6: pink
        Placemat 7: blue
        Placemat 8: pink
        Placemat 9: blue
        Placemat 10: white

    Hint: You can use an operator you learned earlier in the course to
    check if a number is odd or even! 
*/

//method 1
/*
for(var i=1; i<=10; i++){
    if(i==1 || i ==10){
        console.log("Placemat " + i +" : white");
    }
    else if(i%2==0 ){
        console.log("Placemat " + i +" : pink");
    }
    else{
        console.log("Placemat " + i +" : blue");
    }
}
*/

//method2
for(var i=1; i<=10; i++){
    var placemat = "Placemat " + i + ":";
    var color = "";
    if(i==1 || i ==10){
        color= "white";
    }
    else if(i%2==0 ){
        color = "pink";
    }
    else{
        color = "blue";
    }
    console.log(placemat + color);
}