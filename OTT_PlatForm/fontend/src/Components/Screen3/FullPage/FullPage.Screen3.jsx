import { useState } from "react";
import { Screen3_bgImage } from "../FileContainer.Screen3.js";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

export default function FullPage_Screen3() {
  const [ContentOne, setContentOne] = useState(false);
  const [ContentTwo, setContentTwo] = useState(false);
  const [ContentThree, setContentThree] = useState(false);

  const changeContentOneValue = () => {
    setContentOne((prev) => !prev);
  };
  const changeContentTwoValue = () => {
    setContentTwo((prev) => !prev);
  };
  const changeContentThreeValue = () => {
    setContentThree((prev) => !prev);
  };

  const ReturnContext = ({
    headingMSG = "Nothing",
    titleMSG = "Nothing Is available",
    hook_Name = "null",
    click_handler_func = () => {},
  }) => {
    return (
      <div className="w-fit hover:cursor-pointer ">
        <div className="flex items-center" onClick={click_handler_func}>
          {hook_Name ? (
            <FaCaretDown className="text-2xl" />
          ) : (
            <FaCaretRight className="text-2xl" />
          )}
          <span>{headingMSG}</span>
        </div>
        <div
          className={`w-fit border-l ml-3 pl-5 pt-2 ${
            hook_Name ? "visible" : "hidden"
          }  font-semibold font-sans text-base`}
        >
          {titleMSG}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${Screen3_bgImage})` }}
      className="w-full h-fit pt-10 pb-20 pl-32 bg-black  bg-center bg-no-repeat  bg-cover text-white"
    >
      <p className="font-bold text-2xl ">About The PlatForm</p>

      <div className="mt-5 ml-10 flex flex-col gap-y-5">
        <ReturnContext
          headingMSG="Our Mission And Vission"
          hook_Name={ContentOne}
          click_handler_func={changeContentOneValue}
          titleMSG="At our platform, we are committed to providing a seamless and immersive streaming experience. We aim to offer a diverse range of content while prioritizing user-friendly interfaces and top-notch customer support."
        />

        <ReturnContext
          headingMSG="Content Quality"
          hook_Name={ContentTwo}
          click_handler_func={changeContentTwoValue}
          titleMSG="We take pride in curating high-quality movies and shows across various genres. Our platform ensures that users enjoy crisp visuals and crystal-clear audio for an exceptional viewing experience."
        />
        <ReturnContext
          headingMSG="Community Engagement"
          hook_Name={ContentThree}
          click_handler_func={changeContentThreeValue}
          titleMSG="Engagement and feedback from our community are pivotal to us. We actively seek input and ideas to continually enhance and evolve the platform with the user's perspective in mind."
        />
      </div>
    </div>
  );
}
