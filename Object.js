 Person = {
    "first_Name" : "Thoronka",
    "age"       : 20,
    "isMale"    : true,
    "Amount"    :   200.9,
    "Dob "      : new Date(200, 1, 29).toJSON(),

    // implement a neasted object
Address :{

    "city" : "Londom",
    "postCode" : "we32",
}
 }

//  now aply the print out of the 
console.log(Person.first_Name);
console.log(Person.age);
console.log(Person.isMale);
console.log(Person.Amount)
console.log(Person.Address.city)
console.log(Person.Address.postCode)

// To output the values and the keys 
console.log(Object.values(Person))
console.log(Object.keys(Person))
console.log(JSON.stringify(Person))