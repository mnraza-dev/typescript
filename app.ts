interface Car {
    make: string,
    model: string,
    year: number,
    isElectric: boolean,
    features: string[]
}

const displayCarInfo = (car: Car): void => {
    console.log(`Car name is ${car.make} , it is mfgd in ${car.year}`);


}

displayCarInfo({
    make: "Toyoto",
    features: ["It has 6 airbags", "It has 6 color availability"],
    model: "2008",
    year: 2008,
    isElectric: true
})