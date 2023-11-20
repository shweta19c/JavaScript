//Map
const phoneNumbers = ['7876519385', '7583958601', '715902367', '7563829046', '7567231983']

function addInternationalCode(num, index){
    console.log(`${index}   +44 ${num}`);
}
phoneNumbers.map(addInternationalCode);

console.log("\n");

//Anonymus Inline function with map

// const numbersWithInternationalCode = []

// phoneNumbers.forEach(function(num){
//     numbersWithInternationalCode.push(`+44 ${num}`)
//}) Below code gives same output as the commented code with less lines of code. we don't have to initialize empty array & use .push method 
//Here map is very similar to forEach but uses less code without initializing empty array or using .push method.
 const numbersWithInternationalCode = phoneNumbers.map(function(num){ //if we change .map with forEach it gives undefined as output
    return `+44 ${num}`; //It (Map method) returns you new array and that is something foreach doesn't do.
})
console.log(numbersWithInternationalCode);
 //Use foreach to update existing array, carry out logic inside that function and use map to create a new array
 