
//Function with using parameters when calling function, not using parameters(undefined by default), and with default parameters
function confirmPurchase(name, purchaseCount){
    console.log('Thank you for your order, ' +name + '. You have made ' + purchaseCount + ' purchases from us.');
}

confirmPurchase('Tom', 7);

confirmPurchase();

function confirmYourPurchase(name = "Guest User", purchaseCount= 1){
    console.log('Thank you for your order, ' +name + '. You have made ' + purchaseCount + ' purchases from us.');
}
confirmYourPurchase();

console.log("\n");

//Task
/*
Task:
    1. Give the 'amount' parameter a default of 1.
    2. Give the 'rate' parameter a default of 1.07.
    3. Test the function!
*/
function convertCurrency(amount = 1, rate = 1.07){
    console.log(amount * rate);
}

convertCurrency(100, 1.07); //107
convertCurrency(); // Before adding default paramters (undefined * undefined = null) without any parameters
convertCurrency(); // After adding default paramters = 1.07
convertCurrency(200); // With one parameter
convertCurrency(200, 2.07);