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
 * Union Definition:
 * 
 * Unions are used to dclare a type that can have one of several possible types.
 * Unions are useful when we want to allow a variable or parameter to accept 
 * multiple types, or when we want a function to return a value that could have more than one type.
 * 
 */
type UnionType = string | number | boolean;
const unionType: UnionType = 'Hello';
console.log(unionType);

/**
 * Union Example 01
 */
let password: string | number;
password = '123456';
console.log(password);
password = 123456;
console.log(password);


/**
 * Enums Example 01
 */
enum Role {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
}
const role: Role = Role.ADMIN;
console.log(role);

enum WeatherConditions {
    SUNNY = 'sunny',
    RAINY = 'rainy',
    CLOUDY = 'cloudy',
}
const weather: WeatherConditions = WeatherConditions.SUNNY;
console.log(weather);

/**
 * Literal Types:
 * 
 * Literal types are used to declare a type that can only be one of a few specific values.
 * Literal types are useful when we want to ensure that a variable or parameter has a specific value.
 */
type LiteralType = 'hello' | 'world' | 'goodbye';
const literalType: LiteralType = 'hello';
console.log(literalType);