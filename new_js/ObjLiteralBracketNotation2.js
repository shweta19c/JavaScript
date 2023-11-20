//with dot notation method

var castle = {};

castle.price = 2000000;
castle.color = "pink";
castle.numberOfRooms = 20;

function updateObject(object, key, value) {
  object[key] = value;
  return object;
}

castle = updateObject(castle, "color", "Lime Green");
castle = updateObject(castle, "price", 4000000);

console.log(castle);