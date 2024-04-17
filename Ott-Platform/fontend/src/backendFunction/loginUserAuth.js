import axios from "axios";


async function loginUserAuth ({email , password  }) {

  // if email & password is correct then res available in try block
  // if not correct then res available in catch block

  try {
    let response = await  axios.get(`http://localhost:4000/users/isUserExitInDB?email=${email}&password=${password}` , {withCredentials : true} );
    
    // If the below return statement is executing that means response is sucessfulll
    return {
      isSucess : true ,
      name : response.data.name,
      email : response.data.email
    };
  } catch (error) {
    // console.log("error.response => " , error.response)
    // console.log(`Error = ${error.message} [checkIsUserExitAtBackend.Login.Auth/isSignUp()]`)
    
    return {
      isSucess : false ,
      name : undefined , 
      email : undefined
    }
  }
}

export default  loginUserAuth
