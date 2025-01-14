"use strict";
// Type Assertion 
const userInput = document.getElementById('input-text');
const inputText = document.getElementById('input-text');
inputText.addEventListener('input', () => {
    console.log(inputText.value);
});
// inputText.value = 'Hello';
// Generics Intro
// const fruits : string[] = ['apple', 'banana', 'mango'];
const fruits = ['apple', 'banana', 'mango'];
const people = [
    { name: 'MN Raza', age: 30 },
    { name: 'Shivani', age: 40 },
];
const box = {
    value: 'Hello'
};
const numberBox = {
    value: 45
};
console.log(box);
console.log(numberBox);
const user = {
    name: 'MN Raza',
    age: 30
};
console.log(user);
