const phoneNumbers = ['7876519385', '758395860', '715902367', '7563829046', '7567231983']

// foreach can not have other methods chain to it but .map method can have other methods chain to it.
//If we use foreach in the place of .map we get undefined error(cannot return properties of undefined.)
const validatedPhoneNumbers = phoneNumbers.map(
    function (num) {
        return `+44 ${num}`
    }
).filter(
    function (num) {
        return num.length == 14
    })

console.log(validatedPhoneNumbers)