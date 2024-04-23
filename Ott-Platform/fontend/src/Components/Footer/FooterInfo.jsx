import { useContext } from "react";
import FooterContext from "../../Context/FooterContext";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";





function FooterInfo() {
    const { footerContextDetails } = useContext(FooterContext);
    let heading = footerContextDetails.heading;
    let title = footerContextDetails.title;
    const navigate = useNavigate()

    const navigateToHomePage = () => {
        navigate('/')
    }

  return (
    <div className="bg-gray-900 w-full min-h-[100vh] text-white px-10 py-10">
      <div
        onClick={navigateToHomePage}
        className="text-3xl absolute right-10 top-2 hover:bg-green-600 px-3 py-2 rounded-md"
      >
        <FaHome />
      </div>

      <h1 className="text-3xl hover:border-b-2 inline transition-all duration-150 cursor-pointer">
        {heading}
      </h1>

      <p className="mt-5 ml-8">{title}</p>
    </div>
  );
}

export { FooterInfo };
