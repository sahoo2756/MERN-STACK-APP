import { useState, useEffect } from "react";
import movingPoster1 from "./movingPosters/moving.poster1.jpg";
import movingPoster2 from "./movingPosters/moving.poster2.jpg";
import movingPoster3 from "./movingPosters/moving.poster3.jpg";
import movingPoster4 from "./movingPosters/moving.poster4.jpg";
import movingPoster5 from "./movingPosters/moving.poster5.jpg";
import movingPoster6 from "./movingPosters/moving.poster6.jpg";
import movingPoster7 from "./movingPosters/moving.poster7.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const ContextCard = ({ heading, title }) => {
  const [isContextShow, setIsContextShow] = useState(false);

  function toggleContext() {
    setIsContextShow((prev) => !prev);
  }

  return (
    <div className="text-gray-300">
      <div
        onClick={toggleContext}
        className="flex cursor-pointer items-center w-fit px-3 lg:px-0  gap-3 pb-3"
      >
        {isContextShow ? (
          <BiSolidDownArrow className="text-white" />
        ) : (
          <BiSolidRightArrow className="text-white" />
        )}
        <h1 className="text-lg font-semibold">{heading}</h1>
      </div>
      {isContextShow && (
        <p className="border-l-[0.1px] border-gray-600 mb-8 pl-8 pr-2 ml-2 mt-2 text-sm">
          {title}
        </p>
      )}
    </div>
  );
};

export default function FullPage_Screen3() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    movingPoster1,
    movingPoster2,
    movingPoster3,
    movingPoster4,
    movingPoster5,
    movingPoster6,
    movingPoster7,
  ];
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 1000); // Show image after 1 second

    const intervalId = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setShowImage(true);
      }, 3000); // Rotate and show image after 1 second
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-3 bg-black text-white min-h-[70vh]">
      <div className="relative md:w-[50%] w-full lg:pl-16 pb-8">
        <h1 className="text-2xl  text-center lg:text-start  lg:text-4xl font-bold mb-8">Find What You Love</h1>
        <div className="lg:space-y-6 space-y-3">
          <ContextCard
            heading={"Powerful Search"}
            title={
              "Effortlessly find the content you're looking for with our advanced search functionality. Narrow down your results by title, actor, genre, or even specific keywords."
            }
          />
          <ContextCard
            heading={"Personalized Recommendations"}
            title={
              "Our intelligent recommendation engine analyzes your viewing history and preferences to suggest new videos you're sure to enjoy. Discover hidden gems and expand your horizons."
            }
          />
          <ContextCard
            heading={"Intuitive Browsing"}
            title={
              "Explore our user-friendly interface to navigate through our vast library of videos. Easily browse by category, sort by popularity, or discover new releases."
            }
          />
        </div>
      </div>

      <div className="relative md:w-[30%] w-full py-5 px-8">
        <div className="overflow-hidden rounded-md">
          <img
            className={`w-full h-auto transition-transform duration-1000 transform hover:scale-110`}
            style={{
              transform: showImage ? "rotate(360deg)" : "rotate(0deg)",
            }}
            src={images[currentImageIndex]}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}
