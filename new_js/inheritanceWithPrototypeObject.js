var bird = {
    hasWings : true,
    hasFeathers : true,
    canFly : true
}

var eagle1 = Object.create(bird);
console.log("Eagle 1: ", eagle1);

console.log("Eagle1 has Wings: ", eagle1.hasWings);
console.log("Eagle1 has Feathers: ", eagle1.hasFeathers);
console.log("Eagle1 can Fly: ", eagle1.canFly);

var eagle2 = Object.create(bird);
console.log("Eagle2 has Wings: ", eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("Penguin 1: ", penguin1);
console.log("Penguin1 has wings: ", penguin1.hasWings);
console.log("Penguin1 has feathers: ", penguin1.hasFeathers);
console.log("Penguin1 can Fly: ", penguin1.canFly);