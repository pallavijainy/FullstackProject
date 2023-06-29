import axios from "axios";

//data added to cart as a post request

export function AddedToCart(data) {
  return new Promise(async (resolve) => {
    const response = await axios.post("http://localhost:8080/cart", data);
    console.log("added to cart");
    resolve(response.data);
  });
}

//to get the data

export function GetCartDatabyUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await axios.get(
      "http://localhost:8080/cart?user=" + userId
    );
    // console.log(response.data);
    resolve(response.data);
  });
}
