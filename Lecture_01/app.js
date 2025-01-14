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
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
})(Status || (Status = {}));
var TaskStatus = Status.InProgress;
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
