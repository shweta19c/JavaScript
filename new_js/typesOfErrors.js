// Reference error - typo error
/* 
var userName = 'Tom2001'

function greetUser(name){
    console.log('Welcome ' + name)
}

greetUser(username) // reference error : username is not defined


//fixed typo error code
var userName = 'Tom2001'

function greetUser(name){
    console.log('Welcome ' + name)
}

greetUser(userName)

console.log(userList); // reference error  : userList is not defined (variable doesn't exist. Didn't declared/ defined)

*/

/* //Syntax Error - Unexpected token '{'
function logoutConfirmation {
    console.log('Are you sure you want to log out?')    
}

logoutConfirmation()


// Syntax Error fixed
function logoutConfirmation() {
    console.log('Are you sure you want to log out?')    
}

logoutConfirmation()
*/

/*
//TypeError: greeting.push is not a function ---- .push is an array method used on string which You can't use it on string variable.
var greeting = 'Welcome, '
greeting.push('Tom2001') 
console.log(greeting)

//Type error fixed
var greeting = 'Welcome, ';
greeting += 'Tom2001';
console.log(greeting)
*/

/*
//RangeError: toFixed() digits argument must be between 0 and 100
var averageUserAge = 46.897453689405
console.log(averageUserAge.toFixed(101))
*/

//Range error fixed
var averageUserAge = 46.897453689405
console.log(averageUserAge.toFixed(4))

