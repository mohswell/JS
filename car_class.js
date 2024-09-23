class Car{
    constructor(brand, year, fuelLevel, model, color, price)
    {
        this.brand= brand;
        this.year= year;
        this.fuelLevel= fuelLevel;
        this.model= model;
        this.color= color;
        this.price= price; 
    }

    getBrand()
    {
        return this.brand;
    }

    getModel()
    {
        return this.model;
    }

    getYear()
    {
        return this.year;
    }

    getColor()
    {
        return this.color;
    }

    getPrice()
    {
        return this.price;
    }

    getFuelLevel()
    {
        return this.fuelLevel;
    }

    setBrand(brand)
    {
        this.brand= brand;
    }

    setModel(model)
    {
        this.model= model;
    }

    setYear(year)
    {
        this.year= year;
    }

    setColor(color)
    {
        this.color= color;
    }

    setPrice(price)
    {
        this.price= price;
    }

    setFuelLevel(fuelLevel)
    {
        this.fuelLevel= fuelLevel;
    }

    // Method to simulate driving the car
    drive(distance) {
        if (this.fuelLevel > 0) {
            console.log(`${this.brand} ${this.model} is driving for ${distance} kilometers.`);
            this.fuelLevel -= distance / 10; // 10 km per liter

            // Make sure fuel level doesn't go below 0
            if (this.fuelLevel < 0) this.fuelLevel = 0;
        } else 
        {
            console.log(`${this.brand} ${this.model} cannot drive. No fuel.`);
        }
    }

    getDetails()
    {
        return "This car is: " + this.brand + " Brand " + 
        " The Model is: " + this.model + 
        " From the Year: " + this.year + 
        " Color: " + this.color + 
        " Price: " + this.price + 
        " Fuel Level: " + this.fuelLevel;
    }

    stop() 
    {
        console.log(`${this.brand} ${this.model} is stopping...`);  
    }

    honk() 
    {
        console.log(`${this.brand} ${this.model} is honking: Beep beep!`);
    }

    checkFuel() 
    {
        console.log(`${this.brand} ${this.model} has ${this.fuelLevel}% fuel remaining.`);
    }
    
    // Method to refuel the car
    refuel(amount) 
    {
        this.fuelLevel += amount;
        if (this.fuelLevel > 100) this.fuelLevel = 100;
        console.log(`${this.brand} ${this.model} has been refueled to ${this.fuelLevel}% fuel.`);
    }
}

let car1= new Car('Toyota', 2019, 100, 'Corolla', 'Black', 20000);

console.log(car1.getDetails());
car1.setPrice(22000);
console.log(car1.getDetails());

console.log(car1.getFuelLevel());
car1.drive(100);
console.log(car1.getFuelLevel());
