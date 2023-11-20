/*
Task 4: Use the + addition operator to add numbers. 

Imagine you're creating a mid-year financial report for a food and beverage company, and you need to add up the company's total profit from its first two quarters. The company's profits derive from three sources: beverages, snacks, and candy. 
    
    1. Using the data below, add up the profits for quarter one and quarter two. Use the + operator to add the profits for beverages, snacks, and candy together, and assign the result to the variable that corresponds to it (either quarterOneProfit or quarterTwoProfit). 
    
    2. Add these two totals together to get the grand total of mid-year profit. Use the + operator and assign the result to the totalProfit variable. 
    
    3. Console.log the totalProfit variable to see what it is and write down your answer. 
    
Quarter One Profits
    -Beverages: 152555
    -Snacks:     95543
    -Candy:     121235

Quarter Two Profits
    -Beverages:  164569
    -Snacks:     104072
    -Candy:      175423
*/

var quarterOneProfit;
var quarterTwoProfit;
var totalProfit; 

var beverages = 152555;
var snacks = 95543;
var candy = 121235;

var Beverages = 164569;
var Snacks = 104072;
var Candy = 175423;

/* 
quarterOneProfit = beverages + snacks + candy;
console.log(quarterOneProfit);
quarterTwoProfit = Beverages + Snacks + Candy;
console.log(quarterTwoProfit);
var totalProfit = quarterOneProfit + quarterTwoProfit;
console.log(totalProfit);
*/

quarterOneProfit = 152555 + 95543 + 121235;
quarterTwoProfit = 164569 + 104072 + 175423;
totalProfit = quarterOneProfit + quarterTwoProfit;
console.log(totalProfit);

/*
Task 5: Use the + concatenation operator to combine strings and a number. 

    Imagine you're helping a survey team create a profile of a survey participant, using information they've entered in an online form. For this task, you're going to write the opening sentence of the profile, which will report the person's name and age.    

    1. Assign values to the three variables below to describe a real or imaginary person. Assign strings to firstName and lastName. Assign a number to age. 
    
    2. Use the + operator to combine the variables and additional strings to console.log a report about the person. The final result should be a single string in the console — for example, "Jane Doe is 42 years old."   
*/

var firstName;
var lastName;
var age;

firstName = "Shweta";
lastName = "Chavan";
age = 26;
console.log(firstName + " " + lastName + " is " + age + " years old.")

/* 
Task 6: Use the += operator to accumulate values in a variable. 

    Imagine you're creating an app that tracks how many steps a user has walked per day and per week. Your task is to update the weekly total at the end of each day and maintain a log of their daily reports on how many steps they've walked so far in the week. For each day of the week, you will do the following.
    
    1. Update totalSteps using the data provided and the += operator (functioning here as the addition assignment operator). 
    
    2. Console.log the dailyReport to check if it's correct. 
    
    3. Update the reportLog by adding the dailyReport to it using the += operator (functioning here as the concatenation assignment operator).   
    
    4. On the final day (Wednesday), console.log the reportLog to check if it's correct. All three daily reports should appear inside of it. 
*/

/*-----Variables----------------------------------------------------*/ 
var totalSteps = 0;
var dailyReport = "";
var reportLog = "";


/*------Monday-------------------------------------------------------*/   
// The user walks 11505 steps. 

totalSteps += 11505;  

dailyReport = "As of Monday, you walked " + totalSteps + " steps this week. ";  

console.log( dailyReport );

reportLog += dailyReport;


/*------Tuesday-------------------------------------------------------*/
// The user walks 6754 steps. 

totalSteps += 6754;  

dailyReport = "As of Tuesday, you walked " + totalSteps + " steps this week. "; 

console.log(dailyReport);
reportLog += dailyReport;
   
   
/*------Wednesday-----------------------------------------------------*/
// The user walks 7582 steps.

totalSteps += 7582;  

dailyReport = "As of Wednesday, you walked " + totalSteps + " steps this week. ";  

console.log(dailyReport); 

reportLog += dailyReport;
console.log(reportLog);


