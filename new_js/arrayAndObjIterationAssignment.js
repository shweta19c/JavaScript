// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDiary(){
    for (let item of dairy) {
        console.log(item);
}
}
logDiary();
console.log("\n");
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
    }
}
birdCan();
console.log("\n");
// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop]);
    }
}
animalCan();