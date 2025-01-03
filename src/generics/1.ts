import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Errorfetching from ${url}: ${error}`);
  }
}
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers() {
  const users = await fetchData<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(users);
}
fetchUsers().catch((error) => console.error(error));
