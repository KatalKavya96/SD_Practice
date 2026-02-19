interface Vehicle {
  start(): string;
}

class Car implements Vehicle {
//todo

    // private client : Vehicle;
    // constructor(client:Vehicle){

    //     this.client=client
    // }
    start():string{

        return "Car has started"
    }
 }

class Bike implements Vehicle {
  //todo

  start(): string {
      return "Bike has started"
  }
}

class Truck implements Vehicle {
  //todo

  start():string{

    return "Truck has started"
  }
}

type VehicleType = "car" | "bike" | "truck";

class VehicleFactory {
 //todo

 static createVehicle(type: VehicleType): Vehicle{
    switch(type){
        case "car":
            return new Car()
        case "bike":
            return new Bike()
        case "truck":
            return new Truck()
        default:
            throw new Error("Invalid Vehicle Type")
    }
 }
}

const car = VehicleFactory.createVehicle("car");
console.log(car.start());

const bike = VehicleFactory.createVehicle("bike");
console.log(bike.start());

const truck = VehicleFactory.createVehicle("truck");
console.log(truck.start());

// This question has been successfully completed.


