const shoppingList = [
  { name: 'Milk', cost: 3.99 },
  { name: 'Butter', cost: 4.49 },
  { name: 'Tuna', cost: 1.99 },
  { name: 'Tomato', cost: 0.95 },
  { name: 'Eggs', cost: 2.99 },
];

// how can we print out every item name in the list?

// 1. c-style for loop (not recommended)
for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i].name);
}

// 2. for in loop (not recommended for this)
for (const i in shoppingList) {
    console.log(shoppingList[i].name);
}

// 3. for of loop (recommended)
for (const item of shoppingList) {
    console.log(item.name);
}
