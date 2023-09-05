console.log('***** Object Practice *****')

let personList = document.querySelector('#person-attributes');

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: "Brock",
  lastName: "Nelson",
  hasSiblings: true,
  shoeCount: 8,
  favThreeFoods: ["Bagel", "Steak", "Pizza"]
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName + " " + me.lastNAme;
console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(me.favThreeFoods[0])
console.log(me.favThreeFoods[me.favThreeFoods.length -1])


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

me.favThreeFoods[0] = "Captain Crunch";
console.log(me.favThreeFoods)

console.log(me.shoeCount);
me.shoeCount ++;
console.log(me.shoeCount);



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = "Ultramarine Blue";
console.log(me.favoriteColor);

personList.innerHTML += `
  <h2> My first name is: ${me.firstName} ${me.lastName}.</h2>
  <p> My favorite color is: ${me.favoriteColor}.</p>
  <p> I have siblings: ${me.hasSiblings}.</p>
  <p> I currently have ${me.shoeCount} pairs of shoes.</p>
`
for(let i of me.favThreeFoods){
  personList.innerHTML += `
  <p> One of my favorite foods is ${i}.</p>
  `
}