import { useState } from "react";
import movieBannerObj from "./ImagesContainer.Screen4.js";
import { FaPlay } from "react-icons/fa";

function Cart({ imageUrl  }) {
  
  const [isPlayBtn, setIsPlayBtn] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsPlayBtn(true)}
      onMouseLeave={() => setIsPlayBtn(false)}
      className={`w-full lg:w-[15%] relative rounded-md h-[250px] border-[0.5px] border-gray-800  transition duration-300 ease-in-out transform hover:scale-[1.2] shadow-2xl hover:shadow-lg hidden lg:block`}
    >
      <img src={imageUrl} alt="" className="w-full h-full object-cover" />

      {isPlayBtn && (
        <div className="absolute text-2xl inset-0 flex items-center justify-center">
          <FaPlay className="text-white" />
        </div>
      )}
    </div>
  );
}

export default function FullPage_Screen4() {
  const {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  } = movieBannerObj;

  return (
    <div className="bg-black px-4 lg:p-10 pt-20  flex flex-col lg:flex-row flex-wrap justify-between gap-x-10 gap-y-8">
      <Cart imageUrl={image1} />
      <Cart imageUrl={image2} />
      <Cart imageUrl={image3} />
      <Cart imageUrl={image4} />
      <Cart imageUrl={image5} />
      <Cart imageUrl={image6} />
      <Cart imageUrl={image7} customStyle="hidden lg:visible"/>
      <Cart imageUrl={image8} customStyle="hidden lg:visible" />
      <Cart imageUrl={image9}  customStyle="hidden lg:visible"/>
      <Cart imageUrl={image10}  customStyle="hidden lg:visible"/>
      <Cart imageUrl={image11}  customStyle="hidden lg:visible"/>
      <Cart imageUrl={image12}  customStyle="hidden lg:visible"/>
      <Cart imageUrl={image13}  customStyle="hidden lg:visible"/>
      <Cart imageUrl={image1}  customStyle="hidden lg:visible"/>
      <Cart imageUrl={image2}  customStyle="hidden lg:visible"/>
    </div>
  );
}
