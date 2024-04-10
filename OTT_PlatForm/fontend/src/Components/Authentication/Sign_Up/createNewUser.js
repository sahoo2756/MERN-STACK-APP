import axios from "axios";

export default async function createNewUser_SignUp_Auth({
  email,
  password,
  name,
}) {
  try {
    let res = await axios.post(
      "http://localhost:4000/users",
      {
        userData: { email, password, name },
      },
      { withCredentials: true }
    );

    return {
      isSucessFull: true,
      message: res.data.message,
      status: res.status,
    }
  } catch (error) {
    if (error.response.status >= 500) {
      return {
        isSucessFull: false,
        message: "Internal Server Error",
        status: error.response.status,
      };
    } else if (error.response.status >= 400) {
      return {
        isSucessFull: false,
        message: error.response.data.message,
        status: error.response.status,
      };
    } else {
      return {
        isSucessFull: false,
        message: error.message,
        status: null,
      };
    }
  }
}
