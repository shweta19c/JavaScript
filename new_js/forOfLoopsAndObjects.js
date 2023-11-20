const employees = ['Wendy Smith', 'Dave Singh', 'Kerry West']

for(let i = 0; i < employees.length; i++){
    console.log(employees[i]);
}

console.log("\n");
// Same result as above can be obtained by following method of --- for-of loop
for(let employee of employees)
{
    console.log(employee);
}

//for of to loop over Single object = employee1 object

const employee1 = {
    name: 'Wendy Smith',
    dept: 'engineering',
    salary: 100000,
}
// Here name, dept and salary are indiviual keys that's why we using 'key' keyword in for loop below
/*
for(let key of employee1){
    console.log(key);
} // we get TypeError: employee1 is not iterable
*/
console.log("\n");
console.log(Object.keys(employee1)); // here employee1 is an object and keys are in curly brackets namely name, dept, salary
console.log(Object.values(employee1)); // here we get values of employee1 properties 
console.log(Object.entries(employee1)); 
/* Entries:
    [ 'name', 'Wendy Smith' ],
    [ 'dept', 'engineering' ],
    [ 'salary', 100000 ]
  ]
*/
for(let key of Object.keys(employee1)){
    console.log(key);
}

for(let key of Object.keys(employee1)){
    console.log(key + ": " + employee1[key]);
}