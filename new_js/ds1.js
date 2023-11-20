// We are going to look 3 useful array methods namely forEach, .map and filter
//ForEach
const phoneNumbers = ['7876519385', '7583958601', '715902367', '7563829046', '7567231983']

function addInternationalCode(num, index){
    console.log(`${index}   +44 ${num}`);
}

phoneNumbers.forEach(addInternationalCode);


console.log("\n");
//Inline function producing the same result as above.
phoneNumbers.forEach(function(num,index){
    console.log(`${index}   +44 ${num}`);
})



