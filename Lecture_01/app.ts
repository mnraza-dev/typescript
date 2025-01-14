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
    Pending,
    InProgress,
    Completed
}

const TaskStatus = Status.Completed;

if (TaskStatus === Status.Pending) {
    console.log("Status is Pending");
}
else if (TaskStatus === Status.InProgress) {
    console.log("Status is In Progress");
}
else if (TaskStatus === Status.Completed) {
    console.log("Status is Completed");
}
else {
    console.log("Invalid Status");

}


// 

