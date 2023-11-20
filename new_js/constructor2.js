function Furniture(type, price,deliveryCharge){
    this.type = type;
    this.price =price;
    this.deliveryCharge = deliveryCharge;
    this.summerize = function(){
        console.log(`This ${type} costs ${price} or ${price + deliveryCharge} including delivery`);
    }
}

const furnitureItem1 = new Furniture('chair', 500, 50);
const furnitureItem2 = new Furniture('Sofa', 1000, 100);
furnitureItem1.summerize();
furnitureItem2.summerize();