var displayCarInfo = function (car) {
    console.log("Car name is ".concat(car.make, " , it is mfgd in ").concat(car.year));
};
displayCarInfo({
    make: "Toyoto",
    features: ["It has 6 airbags", "It has 6 color availability"],
    model: "2008",
    year: 2008,
    isElectric: true
});
