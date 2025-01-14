type Employee = {
    name: string;
    age: number;
    startDate: Date;
}
type Admin = {
    name: string;
    age: number;
    startDate: Date;
    privileges: string[];
}
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    // type guards

    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    console.log("Name: " + emp.name);
}

const emp1: ElevatedEmployee = {
    name: "MN Raza",
    age: 30,
    startDate: new Date(),
    privileges: ["create-server"]
}

printEmployeeInfo(emp1);


// 

