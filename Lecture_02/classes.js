"use strict";
class Department {
    constructor(n) {
        this.name = n;
        this.employees = [];
    }
    describe() {
        console.log('Department name is ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
const copyAccounting = {
    name: 'Dummy',
    describe: accounting.describe
};
// copyAccounting.describe();
console.log(accounting.employees);
