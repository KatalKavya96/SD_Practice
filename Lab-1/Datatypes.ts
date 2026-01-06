let message = "Hello Typescript"
console.log(message)


// Datatypes

// Number
// Boolean
// String
// Object
// null
// undefined
// Interface

// variable name : type = value

let text : String = "TSx";
console.log(text)

// =======================
// Number
// =======================
let age: number = 21;
console.log("Number:", age);

// =======================
// Boolean
// =======================
let isLoggedIn: boolean = true;
console.log("Boolean:", isLoggedIn);

// =======================
// String
// =======================
let username: string = "Kavya";
console.log("String:", username);

// =======================
// Object
// =======================
let user: {
  id: number;
  name: string;
  isActive: boolean;
} = {
  id: 1,
  name: "Kavya",
  isActive: true,
};
console.log("Object:", user);

// =======================
// null
// =======================
let data: null = null;
console.log("null:", data);

// =======================
// undefined
// =======================
let value: undefined = undefined;
console.log("undefined:", value);

// =======================
// Interface
// =======================
interface Student {
  rollNo: number;
  name: string;
  course: string;
  isEnrolled: boolean;
}

let student: Student = {
  rollNo: 101,
  name: "Samarya",
  course: "Computer Science",
  isEnrolled: true,
};

console.log("Interface Object:", student);

// Type Inference
// Type Union

