import axios from "axios";

//order add

export function OrderAdded(data) {
  return new Promise(async (resolve) => {
    const response = await axios.post("http://localhost:8080/orders", data);
    resolve(response.data);
  });
}
