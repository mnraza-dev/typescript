// TypeScript is a superset of JavaScript

// type checking for functions and variables

function add(a: number, b: number): number {
    return a + b;
}

// console.log(add(237, 2));


// type checking for objects

const person: {
    name: string,
    age: number,
    isMarried: boolean,
    skills: string[]
} = {
    name: "MN Raza",
    age: 30,
    isMarried: true,
    skills: [
        'ReactJS',
        'React Native'
    ]

}

// console.log(person.name);
// console.log(person.skills);


// type checking for arrays

const numbers: number[] = [1, 2, 3, 4, 5];

// console.log(numbers);

// checking tuple Types
// order is important in it
const tuple: [number, string, boolean] = [1, "2", true];
// console.log(tuple);

// Enums

enum Status {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed"
}


const TaskStatus: Status = Status.Completed;

if (TaskStatus === "Pending") {
    console.log("Status is Pending");
}
else if (TaskStatus === "InProgress") {
    console.log("Status is In Progress");
}
else if (TaskStatus === Status.Completed) {
    console.log("Status is Completed");
}


// union types

const score: number | string = "66";

// const score: number | string = 66;  // Valid
// const score: number | string = "Pass";  // Valid
// const score: number | string = true;  // Error


// type guards

if (typeof score === "number") {
    console.log("Score is number", score);
}
else if (typeof score === "string") {
    console.log("Score is string", score);
}


// type aliases

type User = {
    name: string,
    age: number,
    isMarried: boolean,
    skills: string[]
}

const user: User = {
    name: "MN Raza",
    age: 30,
    isMarried: true,
    skills: [
        'ReactJS',
        'React Native'
    ]
}
// console.log(user.skills);
