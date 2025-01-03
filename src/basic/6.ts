interface Address {
  city: string;
  country: string;
}
interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}
const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};
const poly: User = {
  name: "Poly",
  age: 25,
  email: "poly@examle.com",
};
console.log("Mango:", mango);
console.log("Poly:", poly);
