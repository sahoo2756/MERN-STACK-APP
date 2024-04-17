import Navbar from "./Components/Navbar/Navbar";
import FullPage_Screen1 from "./Components/Screen1/FullPages.Screen1.";
import FullPage_Screen2 from "./Components/Screen2/FullPage.Screen2.";
import FullPage_Screen3 from "./Components/Screen3/FullPage.Screen3";
import FullPage_Screen4 from "./Components/Screen4/FullPage.Screen4";
import FullPage_Screen5 from "./Components/Screen5/FullPage.Screen5";
import FullPage_Screen6 from "./Components/Screen6/FullPage.Screen6";
import FullPage_Screen7 from "./Components/Screen7/FullPage.Screen7";
import Footer from "./Components/Footer/Footer";

import LoginUserContext from "./Context/loginUserContext";
import { useContext , useEffect } from "react";
import Cookies from 'js-cookie'
import axios from "axios"

function App() {
  const { isSystemLoggenIn , loggedInUserData,setSystemLoggedIn, setLoggedInUserData } =
    useContext(LoginUserContext);

   
    useEffect(() => {
      const checkUserAuthentication = async () => {
        try {
          const token = Cookies.get("uid");
  
          if (!token) {
            setSystemLoggedIn(false);
            return;
          }
  
          const res = await axios.get(`http://localhost:4000/users/api/validateToken?token=${token}`, {
            withCredentials: true,
          });
  
          if (res.data.isSucess) {
            const { email, name } = res.data;
            setSystemLoggedIn(true);
            setLoggedInUserData({ name, email, source: "App.jsx try if block" });
          } else {
            setSystemLoggedIn(false);
            setLoggedInUserData({ source: "App.jsx try else block" });
          }
        } catch (error) {
          console.log(error.message)
          setSystemLoggedIn(false);
          setLoggedInUserData({ source: "App.jsx main catch block" });
        }
      };
  
      checkUserAuthentication();
    }, []);
  

  return (
    <>
      <Navbar />
      <FullPage_Screen1 />
      <FullPage_Screen2 />
      <FullPage_Screen3 />
      <FullPage_Screen4 />
      <FullPage_Screen5 />
      <FullPage_Screen6 />
      <FullPage_Screen7 />
      <Footer />
    </>
  );
}

export default App;
