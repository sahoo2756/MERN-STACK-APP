import { useEffect, useContext } from "react";
import {
  FullPage_Screen1,
  FullPage_Screen2,
  FullPage_Screen3,
  FullPage_Screen4,
  LoginUserContext,
} from "./Components/FileContainer.Components.js";

import axios from "axios";
import Cookies from "js-cookie";

function App() {
  // [algorithm for managing the systemUser]
  // const [isSystemLoggenIn , setSystemLoggedIn] = useState(false);
  // Intially state is false
  // I will use this 2 hook in Sceen1.navbar, App.jsx , Login_Auth.js
  // when web application is loading
  // get uid cookies
  // make a api call to check is a valid token
  // [valid] setSystemLoggedIn(true)
  // id uid is null or token is not valid then setSystemLoggedIn(false)

  // when user sucessfully sign-up their account
  // setSystemLoggedIn(true)

  // when user click on logOut btn then
  // setSystemLoggedIn(false) & Cookies.ste("uid" , null)

  const {
    isSystemLoggenIn,
    setSystemLoggedIn,
    loggedInUserData,
    setLoggedInUserData,
  } = useContext(LoginUserContext);

  useEffect(() => {
    try {
      const token = Cookies.get("uid");
      //  console.log(token)
      if (!token) {
        setSystemLoggedIn(false);
      } else {
        axios
          .get(`http://localhost:4000/users/api/validateToken?token=${token}`, {
            withCredentials: true,
          })
          .then((res) => {
            // res.data contain an object if token is true otherwise null
            if (res.data.isSucess) {
              
              let stringObj = JSON.stringify({
                email: res.data.email,
                name: res.data.name,
              });
              sessionStorage.setItem("loggedUserData", stringObj);
              setSystemLoggedIn(true);
              setLoggedInUserData({
                name: res.data.name,
                email: res.data.email,
                source: "App.jsx try if block",
              });
            } else {
              setSystemLoggedIn(false);
              setLoggedInUserData({ source: "App.jsx try else block" });
            }
          })
          .catch((err) => {
            console.log(
              `Error at axios.get() inside catch block [App.jsx] ${err.data.message}`
            );
            setSystemLoggedIn(false);
            setLoggedInUserData({ souce: "App.jsx try inside catch " });
          });
      }
    } catch (error) {
      console.log(`Error at [App.jsx in useEffect hook] `);
      setSystemLoggedIn(false);
      setLoggedInUserData({ souce: "App.jsx main catch block" });
    }
  }, []);

  return (
    <>
      <FullPage_Screen1 />
      <FullPage_Screen2 />
      <FullPage_Screen3 />
      <FullPage_Screen4 />
    </>
  );
}

export default App;
