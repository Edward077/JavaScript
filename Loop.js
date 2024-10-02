// create an array to be loop using the for lop

var Animals = ["Dog", "cat", "rat", "pet", "puppy", "frog"];


// Implementation of for (i) loop
for (var k =0; k< Animals.length; k++) {

    console.log(Animals[k]);

}

    //  this is for (i)
 for (var i =0; i<=2; i++ ){
 console.log(i);
}

// Another way to implement for loop (For Of loop)

console.log ("for of");

for (const animals of Animals){
    console.log(animals)
};


// applying foreach 
console.log("for Each");
Animals.forEach(function(animal) {
    console.log(animal)

})