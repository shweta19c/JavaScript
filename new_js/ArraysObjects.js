var friendsList = ['Wayne','Sara','Frankie']

console.log(friendsList);
friendsList.push('kelly');
console.log(friendsList);

friendsList.pop();
console.log(friendsList);

/*
Task: 
    1. Create an empty array and store it in a variable named 
       presentList.
    2. Push 5 items that you would like to receive as a gift.
    3. Use the pop method to delete all of the items 
       (because you received all of the gifts!!)
    
    Extra: you could use a for loop to pop off all of the items. 
    This might be a bit tricky, so I have given you a hint.
*/

var presentList = [];

presentList.push('watch');
presentList.push('hair straightner');
presentList.push('New top');
presentList.push('jeans');
presentList.push('Air conditioner');
console.log(presentList);

for(var i = presentList.length; i >=0; i--){
    presentList.pop();
}

if(presentList==0){
    console.log("You have received all your gifts.");
}
else{
    console.log("you are still have some gifts to receive.");
}