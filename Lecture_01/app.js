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
var score = "66";
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
var user = {
    name: "MN Raza",
    age: 30,
    isMarried: true,
    skills: [
        'ReactJS',
        'React Native'
    ]
};
var displayCarInfo = function (car) {
    // console.log(`Car name is ${car.make} , it is mfgd in ${car.year}`);
};
displayCarInfo({
    make: "Suzuki",
    features: ["It has 8 airbags", "It has 4 color availability"],
    model: "2011",
    year: 2011,
    isElectric: false
});
// function types
function sum(a, b) {
    return a + b;
}
var sum2;
sum2 = sum;
// console.log(sum2(78,7));
var subs = function (a, b, cb) {
    var res = a - b;
    cb(res);
};
subs(100, 20, function (res) {
    console.log(res);
});
// never type
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
// generateError("An error occured", 500);
