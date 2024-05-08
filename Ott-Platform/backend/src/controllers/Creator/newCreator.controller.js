import { creatorDBModel } from "../../config/Schema/creatorSchema.js";



function commonCatchHandler(errorObj) {
  // this functiom allways return an object
  if (Boolean(errorObj.statusCode) === true) {
    return errorObj;
  } else {
    return {
      isSuccess: false,
      statusCode: 500,
      message: "Internal Server Issue",
    };
  }
}

function validateCreatorData(data) {
  try {
    const badReqObj = {
      isSuccess: false,
      message: "",
      statusCode: 400,
    };

    if (Boolean(data) === false) {
      badReqObj.message = "Creator Data Is Not Available";
      throw badReqObj;
    }

    const { name, email, password } = data;

    if (!Boolean(name)) {
      badReqObj.message = "Name Feild Is Invalid";
      throw badReqObj;
    }
    if (!Boolean(email)) {
      badReqObj.message = "Email Feild Is Invalid";
      throw badReqObj;
    }
    if (!Boolean(password)) {
      badReqObj.message = "Password Feild Is Invalid";
      throw badReqObj;
    }

    // if everything is correct
    return { isSuccess: true };
  } catch (errorObj) {
    let obj = commonCatchHandler(errorObj);
    return obj;
  } // catch block end
}

async function make_A_newUser(req) {
  try {
    // client should send creator data in [data feild] inside the req.body
    const data = req.body.data;
    const resObj = validateCreatorData(data);
    if (resObj.isSuccess === false) {
      throw resObj; // move control into catch block
    }

    const { name, email, password } = data;

    const isCreatorExit = Boolean(await creatorDBModel.findOne({ email }));
    console.log('creator = ' , isCreatorExit)
    if(isCreatorExit === true) {
      throw {
        isSuccess : false , 
        message : "User Exit" , 
        statusCode : 417 // 417 red expected not meet
      }
    }


    const newCreator = new creatorDBModel({ name, email, password });

    // Save the newCreator in to the database
    await newCreator.save();

    return { isSuccess: true };
  } catch (errorObj) {
    let obj = commonCatchHandler(errorObj);
    console.log("obj = " , obj)
    return obj;
  } //  catch block end
}

// work on post request
export default async function newCreator(req, res) {
  try {
    let resObj = await make_A_newUser(req);

    console.log('resObj = ' , resObj)
    if (resObj.isSuccess === false) {
      throw resObj;
    }
    

    res.send({
      statusCode: 201,
      message: "Creator Account Created Sucessfully",
      isSuccess: true,
    });
  } catch (errorObj) {
    // console.log()
    let resObj = commonCatchHandler(errorObj);
    res.send({ ...resObj });
  } //  catch block end
}
