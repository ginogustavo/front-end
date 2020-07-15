var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: "2020",
    details: function(){
        console.log(`Auto: ${this.model} ${this.year}`)
    }
};
console.log(myCar)
console.log(myCar.model);
console.log(myCar.details());

// ===== Object using Constructor function

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}
// "new" generates a new instance of the constructor function
// an object that derives from another object.
let newCar  = new car("Tesla","Model 3", 2020);
let newCar2 = new car("Tesla","Model X", 2018);
let newCar3 = new car("Toyota","Tecel", 2010);
console.log(newCar3);


//Challenge. loop & new objects
/* =============== */
let brands = ["Chevrolet","BMW", "Peugeot", "Audi"];
let cars = [];

for (let index = 0; index < 30; index++) {
    let brand_ = brands[Math.floor(Math.random() * brands.length)];
    let year_ = Math.floor(Math.random() * 20)+2000;
    let model_ = "Series"+index;
    let carObj = new car(brand_,model_,year_);
    cars.push( carObj);
}
console.log(cars);