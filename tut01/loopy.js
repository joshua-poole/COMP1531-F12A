const shoppingList = [
  { name: 'Milk', cost: 3.99 },
  { name: 'Butter', cost: 4.49 },
  { name: 'Tuna', cost: 1.99 },
  { name: 'Tomato', cost: 0.95 },
  { name: 'Eggs', cost: 2.99 },
];
// for (int i = 0; i < SIZE; i++) { ... }
// how can we print out every item name in the shopping list?
// for (let i = 0; i < shoppingList.length; i++) {
//   console.log(shoppingList[i].name);
// }

for (const item of shoppingList) {
  console.log(typeof(item.cost));
  // console.log(item.name);
}
https://dev.to/mollynem/git-github--workflow-fundamentals-5496