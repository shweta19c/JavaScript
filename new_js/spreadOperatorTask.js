//Using spread operator to combine 2 arrays
const kellysPets = ['dog', 'cat', 'fish']
const jessiesPets = ['snake', 'rat', 'piglet']
let allPets = [...kellysPets, ...jessiesPets]
allPets = [...allPets, 'goat']

//console.log(allPets);

//Using spread operator on objects to join 2 objects/ combine 2 objects
const kellysPetsNames = {dog: 'Benny', cat: 'Whisky', fish: 'Nemo'}
const jessiesPetsNames = {snake: 'Silver', rat: 'Barnie', piglet: 'Dave'}
const allPetsNames = {...kellysPetsNames, ...jessiesPetsNames}
const franksPetsNames = {...kellysPetsNames}
//console.log(allPetsNames);

kellysPetsNames.dog = 'Gail';
console.log(kellysPetsNames);
console.log(franksPetsNames);


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lettersArray = [...letters]
console.log(lettersArray);

const oscarWinnersOne = {2018: 'Green Book', 2017: 'The Shape of Water', 2016: 'Moonlight'}
const oscarWinnersTwo = {2021: 'Nomadland', 2020: 'Coda', 2019: 'Parasite'}

/*
Task:
    1. Use the spread operator to combine the two objects 
       of Oscar winners into a single object just called 
       'oscarWinners'.
    2. Add the 2015 winner, which was called 'Spotlight', 
       to 'oscarWinners'. (Be careful, you might need to change 
       the const to a let!) 
*/

let oscarWinners = {...oscarWinnersOne, ...oscarWinnersTwo}
oscarWinners = {...oscarWinners, 2015:'Spotlight'}
console.log(oscarWinners);

let obj = {
    key:1,
    value:4
};
let output = {...obj};
console.log(output);
output.value -= obj.key;
console.log(output.value);

const meal = ["soup","steak","ice "]
let[starter] = meal;
console.log(starter);

function count(... basket){
console.log(basket.length);
}
count(9,8,7,6,5);