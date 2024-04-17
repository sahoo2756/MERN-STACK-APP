import axios from "axios";

async function signUpUser_Auth({
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

     // If the below return statement is executing that means response is sucessfulll
    return {
      isSucessFull: true,
      message: res.data.message,
      status: res.status,
    }
  } catch (error) {
    console.log(error.response , error)
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

export default signUpUser_Auth


