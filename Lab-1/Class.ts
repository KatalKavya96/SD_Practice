// Class in Ts

class Person {
  id: number;
  name: string;

  // Constructor => It is a special method to initialize the object
  // Explanation of how construotr is working here => When we create an object of the class Person, the constructor is called automatically with the provided id and name values. These values are then assigned to the class properties this.id and this.name, initializing the object.
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // Method to display person details
  display(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

const person1 = new Person(1, "Kavya");
console.log("Class Person:", person1.display());

const person2 = new Person(2, "Aarav");
console.log("Class Person:", person2.display());

// Explanation of how class is working here => The Person class defines a blueprint for creating person objects with id and name properties, along with a display method to show their details. When we create instances of the Person class using the new keyword, the constructor initializes the properties, and we can call the display method to get a formatted string of the person's information.

// Private and Public Access Modifiers

class Employee {
  private empId: number; // Private property
  public empName: string; // Public property

  constructor(empId: number, empName: string) {
    this.empId = empId;
    this.empName = empName;
  }

  getDetails(): string {
    return `Employee ID: ${this.empId}, Employee Name: ${this.empName}`;
  }
}

const employee1 = new Employee(101, "Samarya");
console.log("Class Employee:", employee1.getDetails());

// Explanation of how access modifiers are working here => In the Employee class, the empId property is marked as private, meaning it cannot be accessed directly from outside the class. The empName property is public, so it can be accessed freely. The getDetails method provides a way to access the private empId property indirectly, ensuring encapsulation and data protection.