// TypeScript is a superset of JavaScript

// type checking for functions and variables

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(237, 2));


// type checking for objects

const person :{
    name: string,
    age: number,
    isMarried: boolean
} ={
    name: "MN Raza",
    age: 30,
    isMarried: true,

}

console.log(person.name);


// type checking for arrays

const numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers);