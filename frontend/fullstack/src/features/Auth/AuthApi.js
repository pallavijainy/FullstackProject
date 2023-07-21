// A mock function to mimic making an async request for data
import axios from "axios";

//signup
export function RegisterUser(userdata) {
  return new Promise(async (resolve) => {
    const response = await axios.post("http://localhost:8080/users", userdata);

    resolve(response.data);
  });
}

//login

export function LoginUser(userdata) {
  return new Promise(async (resolve, reject) => {
    const email = userdata.email;
    const password = userdata.password;

    const response = await axios.get(
      "http://localhost:8080/users?email=" + email
    );

    if (response.data.length) {
      if (password === response.data[0].password) {
        console.log(response.data[0]);
        resolve(response.data[0]);
      } else {
        reject({ msg: "Wrong Password !" });
        // console.log("wrong credentials");
      }
    } else {
      reject({ msg: "Email does't match" });
      // console.log("user not found");
    }
  });
}
