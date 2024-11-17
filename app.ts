/**
 * Example of Interface 01
 */

// interface Car {
//     make: string,
//     model: string,
//     year: number,
//     isElectric: boolean,
//     features: string[]
// }

// const displayCarInfo = (car: Car): void => {
//     console.log(`Car name is ${car.make} , it is mfgd in ${car.year}`);
// }

// displayCarInfo({
//     make: "Toyoto",
//     features: ["It has 6 airbags", "It has 6 color availability"],
//     model: "2008",
//     year: 2008,
//     isElectric: true
// })


/**
 * Generics Example - 01
 */

// function identity<T>(value: T): T {
//     return value;
// }
// let ans = identity<number>(66);
// console.log(ans);


/**
 * generics Example - 02
 */

// const items = [1, 2, 3, 4, 5, 6, 7, 8]

// const itemsToBeFound = 5
// let output = findItems(items, itemsToBeFound)  //will js give an error ?
// console.log(output);

// function findItems<T>(items: T[], item: T): number {
//     return items.indexOf(item)
// }


/**
 * Example 03 - Generics with optional properties
 */

// interface Book1 {
//     title: string,
//     author: string,
//     year: number,
//     genre: string,
// }
// interface Book2 {
//     title: string,
//     author: string,
//     year: number,
//     genre?: string,
// }


/**
 * 
 * 
 */