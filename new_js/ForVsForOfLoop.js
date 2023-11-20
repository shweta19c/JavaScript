const car = {
    engine: true,
    steering: true,
    speed: "slow",
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ",sportsCar);

console.log("---for-in is unreliable---");
for(prop in sportsCar){
    console.log(prop);
}
for(key in sportsCar){
    console.log(key);
}

console.log("Iterating over object and it's prototype!");

console.log("---for-of loop is reliable---");
for(prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]);
}
console.log("Iterating over object's OWN PROPERTIES only!");