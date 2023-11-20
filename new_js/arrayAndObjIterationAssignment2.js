function logDairy() {
    const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (const product of dairy) {
        console.log(product);
    }
}

logDairy(); // Call the function to see the output

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key in bird) {
        console.log(key + ": " + bird[key]);
    }
}

birdCan(); // Call the function to see the output

function animalCan() {
    for (const key in bird) {
        console.log(key + ": " + bird[key]);
    }
    for (const key in animal) {
        console.log(key + ": " + animal[key]);
    }
}

animalCan(); // Call the function to see the output
