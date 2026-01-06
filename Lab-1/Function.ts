// function functionName(): returnType {
//   function body
// }

/**************************************
 * FUNCTION DECLARATION
 **************************************/

/* Function returning number */
function add(): number {
  return 10 + 20;
}
console.log("Function add():", add());

/* Function with parameter and string return */
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log("Function greet():", greet("Kavya"));

/* Function returning boolean */
function isAdult(age: number): boolean {
  return age >= 18;
}
console.log("Function isAdult():", isAdult(21));

/* Function returning void */
function logMessage(): void {
  console.log("This function returns void");
}
logMessage();

/* Function returning object */
function getUser(): { id: number; name: string } {
  return {
    id: 2,
    name: "Samarya",
  };
}
console.log("Function getUser():", getUser());