interface Vehicle {
  start(): string;
}

class Car implements Vehicle {
//todo
 }

class Bike implements Vehicle {
  //todo
}

class Truck implements Vehicle {
  //todo
}

type VehicleType = "car" | "bike" | "truck";

class VehicleFactory {
 //todo
}

const car = VehicleFactory.createVehicle("car");
console.log(car.start());

const bike = VehicleFactory.createVehicle("bike");
console.log(bike.start());

const truck = VehicleFactory.createVehicle("truck");
console.log(truck.start());



