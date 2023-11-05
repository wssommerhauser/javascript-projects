let superChimpOne = {
   astronautID: 1,
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function(){return Math.round(Math.random() * 10)}
};

let salamander = {
   astronautID: 2,
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function(){return Math.round(Math.random() * 10)}
};

let superChimpTwo = {
   astronautID: 3,
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function(){return Math.round(Math.random() * 10)}
};

let beagle = {
   astronautID: 4,
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function(){return Math.round(Math.random() * 10)}
};

let tardigrade = {
   astronautID: 5,
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function(){return Math.round(Math.random() * 10)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];
// Print out the relevant information about each animal.
function crewReports(animal){
   for(i = 0; i < crew.length; i++){
      let ani = animal[i];
      console.log(`${ani.name} is a ${ani.species}. They are ${ani.age} years old and  ${ani.mass} kilograms. Their ID is ${ani.astronautID}.`);
   }
   return "";
}
// Start an animal race!
function fitnessTest(animal){
   for(i = 0; i < crew.length; i++){
      animalSpeed = Math.ceil(20 / animal[i].move());
      console.log(`${animal[i].name} took ${animalSpeed} turns to take 20 steps.`);
   }
   return "";
}

console.log(crewReports(crew));
console.log(fitnessTest(crew));