import { getData } from "./dataStore.js";

export function getUserById(userId) {
  const data = getData();
  return data.users.find(user => user.userId === userId);
}