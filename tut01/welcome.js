// No #include
// no main function
const SIZE = 10; // Dynamically typed & const

const message = 'Welcome to COMP1531!'; // Single quotes
console.log(message); // No '\n'

console.log(`Numbers from 1 to ${SIZE}`); // Recommended string layout
for (let num = 1; num <= SIZE; num++) { // let
    print_parity(num);
}

function print_parity(num) { // function & no type in parameter & no return type
    if (num % 2 === 0) { // Triple equals
        console.log(`EVEN: ${num}`);
    } else {
        console.log(`ODD: ${num}`);
    }
}
