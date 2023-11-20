// Task 1: Iterate over an array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
  for (const item of dairy) {
    console.log(item);
  }
}

logDairy();

// Task 2: Iterate over an object's own properties
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (const property in bird) {
    if (bird.hasOwnProperty(property)) {
      console.log(`${property}: ${bird[property]}`);
    }
  }
}

birdCan();

// Task 3: Iterate over an object and its prototype
function animalCan() {
  for (const property in bird) {
    if (bird.hasOwnProperty(property) || property in animal) {
      console.log(`${property}: ${bird[property]}`);
    }
  }
}

animalCan();

//got 100% bard