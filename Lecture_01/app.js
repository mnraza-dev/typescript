// TypeScript is a superset of JavaScript
// type checking for functions and variables
function add(a, b) {
    return a + b;
}
// console.log(add(237, 2));
// type checking for objects
var person = {
    name: "MN Raza",
    age: 30,
    isMarried: true,
    skills: [
        'ReactJS',
        'React Native'
    ]
};
// console.log(person.name);
// console.log(person.skills);
// type checking for arrays
var numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// checking tuple Types
// order is important in it
var tuple = [1, "2", true];
// console.log(tuple);
// Enums
var Status;
(function (Status) {
    Status["Pending"] = "Pending";
    Status["InProgress"] = "InProgress";
    Status["Completed"] = "Completed";
})(Status || (Status = {}));
var TaskStatus = Status.Completed;
if (TaskStatus === Status.Pending) {
    console.log("Status is Pending");
}
else if (TaskStatus === Status.InProgress) {
    console.log("Status is In Progress");
}
else if (TaskStatus === Status.Completed) {
    console.log("Status is Completed");
}
// union types
var score = "66";
// const score: number | string = 66;  // Valid
// const score: number | string = "Pass";  // Valid
// const score: number | string = true;  // Error
