import { userModel } from "../config/Schema/userSchema.js";
import { userWatchedList_Model } from "../config/Schema/userWatchedListSchema.js";
import jwt from "jsonwebtoken";




async function isUserExitInDB(req, res) {
  try {
    // Extract user data from req.query
    const { email, password } = req.query;

    // Check for missing fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // const key = process.env.jwtSecretKey;
    // jwt.verify(token, key, (err, decode) => {
    //   if (err) {
    //     console.log(`jwt verify error = > ${err.message} [getUser()]`);
    //     // 401, often denoted as UNAUTHORIZED
    //     res.status(401).json({ sucess: false, message: "Invalid Credentials" });
    //   } else {
    //     const decodeJSON = JSON.stringify(decode, null, 2);
    //     console.log(`decode value is = ${decodeJSON}`);
    //     // 200 OK status code means that the request was successful
    //     res
    //       .status(201)
    //       .json({ sucess: true, message: "User Login Sucessfully" });
    //   }
    // });

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      // user not exit
      return res
        .status(401)
        .json({ sucess: false, message: "Invalid Credentials" });
    }

    let isPasswordTrue = user.password === password;

    // if isPasswordTrue === true then valid email and password
    if (isPasswordTrue) {
      // 200 OK status code means that the request was successful
      let jwtSecretKey = process.env.jwtSecretKey;
      let token = jwt.sign(
        {
          _id: user.email,
          name : user.name ,
          email : user.email
        },
  
        jwtSecretKey
      );
      res.cookie("uid", token);
      return res
        .status(200)
        .json({ sucess: true, name : user.name , message: "User Sucessfully Login" });
    } else {
      // 401, often denoted as UNAUTHORIZED
      return res
        .status(401)
        .json({ sucess: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(
      `Error at getUser user: ${error.message} [userController/getUser()]`
    );
    res.status(500).json({ sucess: false, message: "Internal Server Error" });
  }
}


async function createUserWatchHistory({email}) {
  try {
    const newUserWatchList = new userWatchedList_Model({ email, watchHistory : [] });
    await newUserWatchList.save();
    console.log(`[${email}] watchList Created Sucessfully`)
  } catch (error) {
    console.log('user watchHistiry is not Created Sucessfully')
  }
}

async function pushUser(req, res) {
  try {
    // Extract user data from req.body
    const { email, name, password } = req.body.userData;

    // Check for missing fields
    if (!Boolean(email)) {
      // 406 not acceptable
      return res.status(406).json({ message: "Email Feild Required" });
    }
    if (!Boolean(password)) {
      return res.status(406).json({ message: "Email Feild Required" });
    }
    if (!Boolean(name)) {
      return res.status(406).json({ message: "Name Feild Required" });
    }

    // if {} returns then it sure that email mathes in our databses if not then findOne() return null
    const isUserExit = Boolean(await userModel.findOne({ email }));

    if (isUserExit === true) {
      return res
        .status(400)
        .json({ sucess: false, message: "Email already exists" });
    }

    // Create a new user object
    const newUser = new userModel({ email, name, password });

    // Save the new user to the database
    await newUser.save();
    createUserWatchHistory({email})
    // Send a successful response
    // res.status(201).json({ message: "User created successfully" });
    let jwtSecretKey = process.env.jwtSecretKey;
    let token = jwt.sign(
      {
        _id: email,
        name : name,
        email : email
      },

      jwtSecretKey
    );
    console.log("cokkies send sucessfully", token);
    res.cookie("uid", token);
    // 201  user created sucessfully
    res.status(201).json({ sucess: true, message: "User Created Sucessfully" });
  } catch (error) {
    // Handle any errors during saving
    console.error(`error = ${error.message} [userController/pushUser()]`);
    res.status(500).json({ sucess: false, message: "Internal Server Error" });
  }
}

const validateToken = async (req, res) => {
  try {
    const token = req.query.token;
    const jwtSecretKey = process.env.jwtSecretKey;
    const response =  jwt.verify(token, jwtSecretKey);

    // if forward code is executing that means  token is valid 
    console.log('try res => ',response)
    res.status(200).json({
      isSucess : true , 
      name : response.name,
      email : response.email
    });
  } catch (error) {
    // 406 unAuthorized user | Invalid token
    // 500 Internal Server Error
    // invalid token = error.message = "JWT Malformed"
    // invalid jwtSecretKey = error.message = "invalid Signture"

    if (error.message === "jwt malformed") {
        // if token is inavlid
      res.status(406).json({ isSucess: false, message: 'Invalid Token' });
    } else if (error.message === "invalid signature") {
      // Handle Invalid Signature error
      res.status(500).json({ isSucess: false, message: 'Internal Server Error' });
    } else {
      // Handle other unexpected errors
      res.status(500).json({ isSucess: false, message: error.message });
    }
  }
};

export { isUserExitInDB, pushUser, validateToken };
