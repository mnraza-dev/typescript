class Department {
    name: string;
    employees: string[];
    constructor(n: string) {
        this.name = n;
        this.employees = [];
    }
    describe(this: Department) {
        console.log('Department name is ' + this.name);
    }
    addEmployee(employee: string) {
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
}

// copyAccounting.describe();

console.log(accounting.employees);
