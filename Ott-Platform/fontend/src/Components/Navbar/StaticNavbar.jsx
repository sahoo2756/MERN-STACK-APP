import { NavLink } from "react-router-dom";

export default function StaticNavbar() {
    const btnCss = `text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none`;
    
  return (
    <>
    <NavLink to="/signup">
      <button className={`${btnCss} w-full`}>Sign Up</button>
    </NavLink>

    <NavLink to="/login">
      <button className={`${btnCss} w-full lg:w-fit`}>Login</button>
    </NavLink>
  </>
  )
}