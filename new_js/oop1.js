//In OOP, we group data and functionality as properties and methods inside objects.

//For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:

var virtualPet = {
    sleepy: true,
    nap: function() {}
}

//In OOP, methods update properties stored in the object instead of generating new return values.

//For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

//However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?

//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

/*OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes
logical sense - meaning, the properties and methods "belong together".
*/
//OOP, works by keeping the data and functionality grouped in meaningful objects.

