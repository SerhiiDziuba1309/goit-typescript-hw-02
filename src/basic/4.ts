function showMessage(message: string): void {
  console.log(message);
}
showMessage("Hello, TypeScript");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
const sum = calc(10, 20);
console.log(`Sum: ${sum}`);

function customError(): never {
  throw new Error("Error");
}
