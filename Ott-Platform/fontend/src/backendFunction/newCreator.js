import axios from "axios";

export default async function newCreator_backendFun({ name, email, password }) {
  try {
   
    let res = await axios.post(
      "http://localhost:4000/api/creator",
      {
        data: { name, email, password },
      },
      { withCredentials: true }
    );

console.log(res)

    if(res.data.statusCode === 417) {
      let obj = {
        statusCode : 417 ,
        message : "User Allready Exit" , 
        isSuccess :false , 
        name : 'manas'
      }
      return obj
    }
    
    
    return res.data

  } catch (error) {
    console.log('error = ' , error.message)
    return {
        isSuccess : false , 
        message : "Internal Fontend Issue" , 
        statusCode : 500
    }
  }
}
