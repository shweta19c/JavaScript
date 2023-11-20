//filter
const phoneNumbers = ['7876519385', '7583958601', '715902367', '75638290', '7567231983']

const validatedPhoneNumbers = phoneNumbers.filter(function(num){
    return num.length == 10
})

console.log(validatedPhoneNumbers)

