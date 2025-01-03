function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
const objectA = { name: "Alice", age: 30 };
const objectB = { city: "New York", country: "USA" };

const mergedObject = merge(objectA, objectB);

console.log(mergedObject);

console.log(`Name: ${mergedObject.name}`);
console.log(`City: ${mergedObject.city}`);
