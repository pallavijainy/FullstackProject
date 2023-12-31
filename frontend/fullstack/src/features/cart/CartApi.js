import axios from "axios";

//data added to cart as a post request

export function AddedToCart(data) {
  return new Promise(async (resolve) => {
    const response = await axios.post("http://localhost:8080/cart", data);
    // console.log("added to cart");
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

//update cart
export function UpdateCart(update) {
  return new Promise(async (resolve) => {
    const response = await axios.patch(
      `http://localhost:8080/cart/${update.id}`,
      update
    );
    console.log(response.data);
    resolve(response.data);
  });
}

//delete cart item
export function DeleteCartItem(id) {
  return new Promise(async (resolve) => {
    await axios
      .delete(`http://localhost:8080/cart/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(response.data);
  });
}

//reset cart
export function ResetCart(userid) {
  return new Promise(async (resolve) => {
    const response = await GetCartDatabyUserId(userid);
    console.log(response);

    for (let item of response) {
      await DeleteCartItem(item.id);
    }
    resolve({ status: "success" });
  });
}
