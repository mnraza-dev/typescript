// Type Assertion 

const userInput = <HTMLInputElement>document.getElementById('input-text')!;
const inputText = document.getElementById('input-text')! as HTMLInputElement;
inputText.addEventListener('input', () => {
    console.log(inputText.value);
});


// inputText.value = 'Hello';


// Generics Intro

// const fruits : string[] = ['apple', 'banana', 'mango'];
const fruits: string[] = ['apple', 'banana', 'mango'];

// const fav_fruits : Array<string> = ['apple', 'banana', 'mango'];
// fav_fruits.push('orange');
// // fav_fruits.push(89);


type Person = {
    name: string,
    age: number
}
const people: Array<Person> = [
    { name: 'MN Raza', age: 30 },
    { name: 'Shivani', age: 40 },

]

// console.log(people);

// Generics Interface Example - 01
interface Box<T> {
    value: T
}
const box: Box<string> = {
    value: 'Hello'
}
const numberBox: Box<number> = {
    value: 45
}
console.log(box);
console.log(numberBox);


// Generics Default Example - 02

interface User<T = string> {
    name: T,
    age: number
}

const user: User = {
    name: 'MN Raza',
    age: 30
}

console.log(user);
