const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;

export const callback = (a: number): number => {
  return 100 + a;
};
export { age, username, toggle, empty };
console.log(`Age: ${age}`);
console.log(`Username: ${username}`);
console.log(`Toggle: ${toggle}`);
console.log(`Empty: ${empty}`);
const result = callback(50);
console.log(`Callback result: ${result}`);
