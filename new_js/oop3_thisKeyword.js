var purchase1 = {
    shoes: 100,
    stateTax : 1.2,
    totalPrice : function(){
       var calculation = this.shoes * this.stateTax;
       console.log('Total price: ', calculation);
    }
}

purchase1.totalPrice();

var purchase2 = {
    shoes : 50,
    stateTax : 1.2,
    totalPrice : function(){
        var calculation = this.shoes * this.stateTax;
        console.log('total price: ', calculation);
    }
}

purchase2.totalPrice();