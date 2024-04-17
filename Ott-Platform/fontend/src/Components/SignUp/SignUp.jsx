import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signUpUser_Auth from "../../backendFunction/signUpUserAuth.js";
import LoginUserContext from "../../Context/loginUserContext.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPage() {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const navigate = useNavigate();
  const {
    setSystemLoggedIn,
    setLoggedInUserData
  } = useContext(LoginUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let email = inputEmailRef.current.value;
    let password = inputPasswordRef.current.value;
    let name = inputNameRef.current.value;

    const sucessFullSignUp = () => toast.success("SignUp Successfully");
    const badSignUp = (msg) => toast.error(msg);

    let response = await signUpUser_Auth({
      email,
      password,
      name,
    });

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
    "bg-gray-200 border outline-none tracking-wide px-2 py-1 rounded-md w-[90%] lg:w-[400px]";

  const formTailwind =
    "border w-full lg:w-fit h-fit flex flex-col justify-center items-center py-5 lg:px-10 gap-y-5 rounded-lg mx-auto";

  const signUpBtnTailwind =
    "bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-md text-white";

  return (
    <div className="w-full h-screen overflow-hidden  pt-10 justify-center bg-gray-100 text-gray-900 ">
      <form onSubmit={handleSubmit} className={` ${formTailwind} `}>
        <h1 className="text-2xl font-bold">Sign-Up</h1>
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
          className={`${signUpBtnTailwind}`}
        >
          Sign Up
        </button>
        <p className="text-sm text-gray-400">
          <span>If already have an account </span>
          <NavLink to="/login" className="text-green-500 font-semibold hover:text-green-600">
            Login
          </NavLink>
        </p>
      </form>

      <div className="mt-8 flex justify-center">
        <NavLink className="text-green-700 border border-transparent py-2 px-4 rounded-md font-semibold hover:bg-gray-100 hover:border-gray-300" to="/">
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


// a0ad986a658ec1228cfa79d35b87538f

// uuz!BbJA44$zHkd  -- maigun password

// 8328811400  :- Manas Senapati
