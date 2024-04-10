import { useRef, useState  } from "react";
import { NavLink } from "react-router-dom";
import { isUserExitInDB } from "../FileContainer.Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


export default function LoginPage_Auth({ prop }) {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useNavigate();
  const {
    isSystemLoggenIn,
    setSystemLoggedIn,
    loggedInUserData,
    setLoggedInUserData,
  } = prop;

  const handleSubmit = async (event) => {
    event.preventDefault();
    let email = inputEmailRef.current.value;
    let password = inputPasswordRef.current.value;

    const res = await isUserExitInDB({
      email,
      password,
      setSystemLoggedIn,
      setLoggedInUserData,
    });

    // if boolValue true then show react.toastify("Sucessfull Logged In")
    // if boolValue is false then react.toastify("Invalid Credentials")

    const sucessFullLogin = () => toast.success("Login SucessFully");
    const badLogin = () => toast.error("Sorry ! Invalid Credentials");
    if (res.isSucess) {
      sucessFullLogin();
      setSystemLoggedIn(true);
      setLoggedInUserData({
        name: res.name,
        email : res.email,
        source: "LoginPage_Auth() if() block at Login.auth ",
      });
      setTimeout(()=>{
        navigate('/')
      } ,2000)
    } else {
      badLogin();
      setSystemLoggedIn(false);
      setLoggedInUserData({
        source: "LoginPage_Auth() else() block at Login.auth ",
      });
    }
  };

  const inputTailwindProperty =
    "bg-transparent border outline-none tracking-wide px-2 py-1 rounded-md w-[400px] placeholder:text-white/70";

  const formTailwind =
    "border w-fit h-fit flex flex-col justify-center items-center p-10 gap-y-5 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500";

  const loginBtnTailwind = "bg-blue";

  // Return the login form
  return (
    <div className="w-full h-screen overflow-hidden  pt-10 bg-gradient-to-r from-red-400 to-fuchsia-500 text-white ">
      <form
        onSubmit={handleSubmit}
        className={`bg-gradient-to-r from-sky-400 to-indigo-400 ${formTailwind} `}
      >
        <h1 className="text-2xl ">Login Here</h1>
        <input
          type="email"
          placeholder="Email"
          required
          ref={inputEmailRef}
          className={` ${inputTailwindProperty}`}
          spellCheck="false"
        />
        <input
          type="password"
          placeholder="Password"
          required
          ref={inputPasswordRef}
          className={`${inputTailwindProperty}`}
        />
        <button
          type="submit"
          className={`bg-blue-700 px-5 pt-1 pb-2 rounded-md text-center ${loginBtnTailwind}`}
          onClick={handleSubmit}
        >
          Login
        </button>
        <p className="text-sm text-white">
          <span>If don't have any account </span>
          <NavLink to="/sign-up" className="border-b  font-bold">
            Sign-Up
          </NavLink>
        </p>
      </form>

      <div className="w-fit mt-10 mx-auto">
        <NavLink className="text-white border p-2 rounded-md" to="/">
          Go back To Home Page
        </NavLink>
      </div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        richColors
        theme="colored"
        toastStyle={{
          // backgroundColor: "black",
          color: "white",
          width: "auto",
        }}
        closeButtonStyle={{
          color: "white", // Set close button text color to white
        }}
      />
    </div>
  );
}

// sahoo15820004@gmail.com
// Sau@2756
