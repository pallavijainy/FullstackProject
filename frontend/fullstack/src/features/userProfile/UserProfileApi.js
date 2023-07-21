// A mock function to mimic making an async request for data

import axios from "axios";

//fetch user profile
export function UsersAllOrders(userid) {
  return new Promise(async (resolve) => {
    const response = await axios.get(
      "http://localhost:8080/orders?user" + userid
    );

    resolve({ data: response });
  });
}

export function fetchLoggedInUser(userid) {
  return new Promise(async (resolve) => {
    const response = await axios.get(`http://localhost:8080/users/${userid}`);
    console.log(response);
    resolve({ data: response.data });
  });
}

//update User
export function UpdateUser(update) {
  return new Promise(async (resolve) => {
    const response = await axios.patch(
      `http://localhost:8080/users/${update.id}`,
      update
    );
    console.log(response.data);
    resolve(response.data);
  });
}
