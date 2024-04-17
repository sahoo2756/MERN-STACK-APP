// import { useEffect } from "react";
// import video1 from "./video1.mp4";
// import video2 from "./video2.mp4";
// import video3 from "./video3.mp4";


// function VideoCart({ videUrl }) {
//   return (
//     <div className="absolute top-0 left-0 w-full h-full">
//       <video
//         src={videUrl}
//         loop
//         autoPlay={true}
//         muted
//         className="w-full h-full object-fill"
//       ></video>
//     </div>
//   );
// }

// export default function FullPage_Screen5() {
  

//   return (
//     <div className="relative border w-full h-[500px] bg-black">
//       <VideoCart videUrl={video1} />
//       <VideoCart videUrl={video2} />
//       <VideoCart videUrl={video3} />
//     </div>
//   );
// }













import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";

function VideoCart({ videoUrl }) {
  return (
    <div className="relative ">
      <video src={videoUrl} loop autoPlay muted className="relative w-full h-[600px] bg-gray-300 object-fill"></video>
    </div>
  );
}

export default function FullPage_Screen5() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext(); // Move to the next slide
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Delay between slides in milliseconds
  };

  return (
      <Slider className="relative bg-black" ref={sliderRef} {...settings}>
        <VideoCart videoUrl={video1} />
        <VideoCart videoUrl={video2} />
        <VideoCart videoUrl={video3} />
      </Slider>
  );
}
