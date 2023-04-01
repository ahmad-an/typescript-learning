abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean = false) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.rented) {
        console.log('This vehicle is already rented.');
      } else {
        this.rented = true;
        console.log('Vehicle rented successfully.');
      }
    }
  
    return(): void {
      if (this.rented) {
        this.rented = false;
        console.log('Vehicle returned successfully.');
      } else {
        console.log('This vehicle is available.');
      }
    }
  }
  
  class Car extends Vehicle {
    numWheels: number;
  
    constructor(make: string, model: string, year: number, numWheels: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.numWheels = numWheels;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    getNumWheel(): number {
      return this.numWheels;
    }
  }
  
  class Truck extends Vehicle {
    loadingCap: string;
  
    constructor(make: string, model: string, year: number, loadCapacity: string, rented: boolean = false) {
      super(make, model, year, rented);
      this.loadingCap = loadCapacity;
    }
  
    rentalRate(): number {
      return 100;
    }
  
    getloadingCap(): string {
      return this.loadingCap;
    }
  }
  
  class Motorcycle extends Vehicle {
    engineSize: string;
  
    constructor(make: string, model: string, year: number, engineSize: string, rented: boolean = false) {
      super(make, model, year, rented);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 25;
    }
  
    getEngineSize(): string {
      return this.engineSize;
    }
  }
  
  // Testing the classes

  // Testing Motorcycle Class
  
  const motorcycle = new Motorcycle('Suzuki', 'Vespa', 1981, "70cc");
  console.log(motorcycle.getMake()); // Output: Honda
  console.log(motorcycle.getModel()); // Output: Civic
  console.log(motorcycle.getYear()); // Output: 2021
  console.log(motorcycle.getEngineSize()); // Output: 4
  console.log(motorcycle.rentalRate()); // Output: 50
  console.log(motorcycle.isRented()); // Output: false
  motorcycle.rent(); // Output: Vehicle rented successfully.
  console.log(motorcycle.isRented()); // Output: true
  motorcycle.return(); // Output: Vehicle returned successfully.
  console.log(motorcycle.isRented()); // Output: false


  // Testing Car Class

  const car = new Car('Moras', 'Foxi', 1981, 4);
  console.log(car.getMake()); // Output: Honda
  console.log(car.getModel()); // Output: Civic
  console.log(car.getYear()); // Output: 2021
  console.log(car.getNumWheel()); // Output: 4
  console.log(car.rentalRate()); // Output: 50
  console.log(car.isRented()); // Output: false
  car.rent(); // Output: Vehicle rented successfully.
  console.log(car.isRented()); // Output: true
  car.return(); // Output: Vehicle returned successfully.
  console.log(car.isRented()); // Output: false
  
  // Testing Truck Class
  const truck = new Truck('Hino', 'Dumper', 2018, "2000 KG");
  console.log(truck.getMake()); // Output: Ford
  console.log(truck.getModel()); // Output: F-150
  console.log(truck.getYear()); // Output: 2021
  console.log(truck.getloadingCap()); // Output: 2000 KG
  console.log(truck.rentalRate()); // Output: 100