/**
 * Interscetions Example 01
 */
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'MN Raza',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(e1);

/**
 * Intersections Example 02 
 */

type UserInfo = {
    first: string,
    last: string,
    age: number,
}
type AccountDetails = {
    email: string,
    password: string,
}

type User = UserInfo & AccountDetails;

const p1: User = {
    first: 'Moin',
    last: 'Raza',
    age: 21,
    email: 'T7v6o@example.com',
    password: '123456',
}
console.log(p1);

/**
 * Intersection Example 03
 */