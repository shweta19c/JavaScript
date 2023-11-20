//Map and Set
const favFilms = new Map()
favFilms.set(1,' 3 Idiots');
favFilms.set(2,'Phir Hera Pheri');
favFilms.set(3, 'Chup Chup ke');
favFilms.set(4,'Train to Busan');
favFilms.set(5,'Twilight');

console.log(favFilms);
console.log(favFilms.get(1));

/*
Task:
    1. Create a new Map using the Map constructor and save 
    it to a const called dinnerGuests.
    2. Use the set() method to add three dream dinner guests 
    to your Map.
    3. Log out one or more of the guests using the 
    get() method.
*/

const dinnerGuest = new Map()
dinnerGuest.set(1,'Shah Rukh Khan');
dinnerGuest.set(2,'Alia Bhatt');
dinnerGuest.set(3,'Jennie Kim');

console.log(dinnerGuest);
console.log(dinnerGuest.get(3));

//Sets
const ingredients = ['sugar','salt','flour','butter','chocolate','cookies','salt','flour']

const uniqueIngredients = new Set(ingredients);
console.log(uniqueIngredients);
console.log(ingredients.length);
console.log(uniqueIngredients.length); // can't use length property on sets we will get undefined as output hence use size property
console.log(uniqueIngredients.size);

const dates = ['2003', '2004', '2004', '2006', '2008', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2015', '2017', '2018', '2020', '2020', '2020', '2022']

/*
Task:
    1. Use a Set to create an array of dates minus 
    the duplicates. 
*/

const uniqueYears = new Set(dates);
console.log(uniqueYears);
console.log(dates.length);
console.log(uniqueYears.size);
























