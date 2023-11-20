var letters = 'abc';
//letters.match(/a/);
letters.match(/d/); // gives a null value
console.log(letters.match(/d/))
//console.log("Shweta Chavan")

var noise;
console.log(noise) // undefined

noise = "thunder";
console.log(noise); //outputs 'thunder' after assigning value.

var noise2;
console.log(noise2); //undefined

noise2 = 'wind';  // after assigning value
console.log(noise2);  // outputs value: wind

var game = {
score : 1000
}
console.log(game.Score);  // capital 'S' is used instead of small 's'. //undefined
console.log(game.score);

//empty strings
var name1 = "";
var name2 = '';