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


// const TaskStatus: Status = Status.Completed;

// if (TaskStatus === "Pending") {
//     console.log("Status is Pending");
// }
// else if (TaskStatus === "InProgress") {
//     console.log("Status is In Progress");
// }
// else if (TaskStatus === Status.Completed) {
//     console.log("Status is Completed");
// }


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


// interfaces

interface Car {
    make: string,
    model: string,
    year: number,
    isElectric: boolean,
    features: string[]
}

const displayCarInfo = (car: Car): void => {
    // console.log(`Car name is ${car.make} , it is mfgd in ${car.year}`);
}
displayCarInfo({
    make: "Suzuki",
    features: ["It has 8 airbags", "It has 4 color availability"],
    model: "2011",
    year: 2011,
    isElectric: false
})

// function types

function sum(a: number, b: number): number {
    return a + b;
}

let sum2 : (a : number, b: number) => number;
sum2 = sum;
// console.log(sum2(78,7));


const subs = (a: number, b: number, cb: (a: number ) => void) => {
    const res = a - b;
    cb(res);
}

subs(100, 20, (res) => {
    console.log(res);
})

// never type

const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}

// generateError("An error occured", 500);