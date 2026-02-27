/////////////////////////////////// PART 1 ///////////////////////////////////

// Is there someone taller than 190cm? What about 195cm?
console.log(userData.some(user => user.height > 190))

// What is Jason's age?
const age = userData.find(user => user.name === 'Jason').age
console.log(`Jasons age is: ${age}`)

// What's the average height of all users?
console.log(userData.reduce((a, b) => a + b.height, 0) / userData.length)

/////////////////////////////////// PART 2 ///////////////////////////////////

// how do we add a user called Jarrod, aged 19 and with a height of 162?
userData.push({
  name: 'Jarrod',
  age: 19,
  height: 162,
})
// hi
// how do we remove Jason from the array?
userData = userData.filter(person => person.name != 'Jason');

// make a copy of the array?
let userDataCopy = structuredClone(userData);
