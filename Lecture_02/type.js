"use strict";
function printEmployeeInfo(emp) {
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    console.log("Name: " + emp.name);
}
const emp1 = {
    name: "MN Raza",
    age: 30,
    startDate: new Date(),
    privileges: ["create-server"]
};
printEmployeeInfo(emp1);
