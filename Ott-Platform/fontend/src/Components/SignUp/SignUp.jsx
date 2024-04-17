import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signUpUser_Auth from "../../backendFunction/signUpUserAuth.js";
import LoginUserContext from "../../Context/loginUserContext.js"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPage() {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useNavigate();
  const {
    isSystemLoggenIn ,
    setSystemLoggedIn ,
   loggedInUserData ,
    setLoggedInUserData
  } = useContext(LoginUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let email = inputEmailRef.current.value;
    let password = inputPasswordRef.current.value;
    let name = inputNameRef.current.value;

    const sucessFullSignUp = () => toast.success("SignUp SucessFully");
    const badSignUp = (msg) => toast.error(msg);

    let response = await signUpUser_Auth({
      email,
      password,
      name,
    });

    // response.isSucessFull conians a boolean value
    if (response.isSucessFull) {
      sucessFullSignUp();
      setSystemLoggedIn(true);
      setLoggedInUserData({
        name,
        email,
        source: "SignUpPage_Auth() at Sign_UP.Auth",
      });
      setTimeout(() => {
        navigate("/");
        setSystemLoggedIn(true);
      }, 3000);
    } else {
      badSignUp(response.message);
    }
  };

  const inputTailwindProperty =
    "bg-transparent border outline-none tracking-wide px-2 py-1 rounded-md w-[90%] lg:w-[400px]";

  const formTailwind =
    "border w-full lg:w-fit h-fit flex flex-col justify-center items-center py-5 lg:px-10 gap-y-5 rounded-lg mx-auto";

  const loginBtnTailwind = "bg-blue";

  // Return the login form
  return (
    <div className="w-full h-screen overflow-hidden  pt-10 justify-center bg-black text-white ">
      <form onSubmit={handleSubmit} className={` ${formTailwind} `}>
        <h1 className="text-2xl ">Sign-Up</h1>
        <input
          type="text"
          placeholder="Name"
          required
          ref={inputNameRef}
          className={`${inputTailwindProperty}`}
          spellCheck="false"
        />

        <input
          type="email"
          placeholder="Email"
          required
          ref={inputEmailRef}
          className={`${inputTailwindProperty}`}
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
          className={`bg-blue-700 px-5 pt-1 pb-2 rounded-md ${loginBtnTailwind}`}
        >
          Sign Up
        </button>
        <p className="text-sm text-gray-400">
          <span>If all-ready have any account </span>
          <NavLink to="/login" className="text-green-300 font-thin">
            Login
          </NavLink>
        </p>
      </form>

      <div className="w-fit mt-10 mx-auto">
        <NavLink className="text-green-700" to="/">
          {" "}
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

// a0ad986a658ec1228cfa79d35b87538f

// uuz!BbJA44$zHkd  -- maigun password

// 8328811400  :- Manas Senapati
