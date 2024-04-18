import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import loginUserAuth from "../../backendFunction/loginUserAuth";
import LoginUserContext from "../../Context/loginUserContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


export default function LoginPage({ prop }) {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useNavigate();
  const { setSystemLoggedIn, setLoggedInUserData } = useContext(LoginUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;

    const res = await loginUserAuth({
      email,
      password,
      setSystemLoggedIn,
      setLoggedInUserData,
    });

    if (res.isSucess) {
      const stringObj = JSON.stringify({
        email: res.email,
        name: res.name,
      });
      sessionStorage.setItem("loggedUserData", stringObj);
      toast.success("Login Successfully");
      setSystemLoggedIn(true);
      setLoggedInUserData({
        name: res.name,
        email: res.email,
        source: "LoginPage_Auth() if() block at Login.auth ",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Sorry! Invalid Credentials");
      setSystemLoggedIn(false);
      setLoggedInUserData({
        source: "LoginPage_Auth() else() block at Login.auth ",
      });
    }
  };

  const inputTailwindProperty =
    "bg-gray-200 text-gray-800 border outline-none focus:border-indigo-500 tracking-wide px-3 py-2 rounded-md w-full lg:w-[400px] placeholder-gray-400";

  const formTailwind =
    "border w-full lg:w-fit h-fit flex flex-col justify-center items-center p-6 lg:p-10 gap-y-6 mx-auto bg-white shadow-md rounded-md";

  const loginBtnTailwind =
    "bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-md text-white";

  return (
    // <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
     <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <form onSubmit={handleSubmit} className={formTailwind}>
        <h1 className="text-3xl font-bold mb-4">Login Here</h1>
        <input
          type="email"
          placeholder="Email"
          required
          ref={inputEmailRef}
          className={inputTailwindProperty}
          spellCheck="false"
        />
        <input
          type="password"
          placeholder="Password"
          required
          ref={inputPasswordRef}
          className={inputTailwindProperty}
        />
        <button type="submit" className={loginBtnTailwind}>
          Login
        </button>
        <p className="text-sm mt-2">
          Don't have an account?{" "}
          <NavLink
            to="/signUp"
            className="font-bold text-indigo-500 hover:text-indigo-600"
          >
            Sign Up
          </NavLink>
        </p>
      </form>

      <div className="mt-8">
        <NavLink
          className="text-indigo-500 border border-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-500 hover:text-white"
          to="/"
        >
          Go back To Home Page
        </NavLink>
      </div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        richColors
        theme="colored"
        toastStyle={{
          color: "white",
          width: "auto",
        }}
        closeButtonStyle={{
          color: "white",
        }}
      />
    </div>
  );
}
