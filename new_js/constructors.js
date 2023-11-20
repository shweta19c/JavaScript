function Furniture(type, price,deliveryCharge){
    this.type = type;
    this.price =price;
    this.deliveryCharge = deliveryCharge;
    console.log(this);
}

const furnitureItem1 = new Furniture('chair', 500, 50);
const furnitureItem2 = new Furniture('Sofa', 1000, 100);
