//Rest Operator and destructuring
const top7 = [
    "The Colosseum",
    "The Roman Forum",
    "The Vatican",
    "Trevi Fountain",
    "The Pantheon",
    "Piazza Venezia",
    "The Palatine Hill"
]
const[first, second, third, ...secondVisit] = top7;
console.log(top7);
console.log(secondVisit);

//rest operator is useful in functions too

function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}

let shoppingCart = addTaxToPrices(1.1, 46,89,35,79);
console.log(shoppingCart);