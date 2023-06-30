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
