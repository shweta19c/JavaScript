//Arrays
const phoneNumbers = ['7876519385', '7583958601', '715902367', '7563829046', '7567231983']
const phoneNumbers2 = ['7651938595', '8395860196', '590236797', '6382904698', '6723198399']

const numbersWithInternationalCode = []

phoneNumbers.forEach(function(num, index){
    numbersWithInternationalCode.push(`${index}   +44 ${num}`);
})

console.log(numbersWithInternationalCode);

console.log("\n");

const numbersWithInternationalCode2 = []
phoneNumbers2.forEach(function(num){
    numbersWithInternationalCode2.push(`+44 ${num}`);
})
console.log(numbersWithInternationalCode2);
