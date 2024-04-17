import { NavLink } from "react-router-dom";


function Cart({ heading, title }) {
  return (
    <div className="w-full lg:w-[30%] bg-white shadow-xl rounded-lg p-2 lg:p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50  border border-transparent hover:border-pink-700">
      <h1 className="lg:text-lg font-semibold mb-4 text-gray-800">{heading}</h1>
      <p className="text-sm text-gray-700">{title}</p>
    </div>
  );
}

export default function FullPage_Screen7() {
  return (
    <div className="w-full lg:min-h-[100vh] px-2 pb-4  lg:py-12 bg-black">
      <h1 className="text-lg text-start lg:text-4xl lg:text-center mb-10 font-bold text-white">
        Connecting You to the World of Video
      </h1>

      <div className="container mx-auto flex flex-col lg:flex-row flex-wrap justify-center gap-y-5 lg:gap-8 lg:pr-8">
       
        <Cart
          heading={"Global Access"}
          title={
            "Enjoy our content from anywhere in the world, with support for multiple languages and regions."
          }
        />
        <Cart
          heading={"Cross-Device Compatibility"}
          title={
            "Stream seamlessly across your devices, whether you're on your TV, laptop, or mobile phone."
          }
        />
        <Cart
          heading={"Dedicated Support"}
          title={
            "Our friendly customer service team is always available to assist you with any questions or concerns."
          }
        />
        <Cart
          heading={"Copyright Protection"}
          title={
            "Rest assured that your viewing experience is secure and your privacy is our top priority."
          }
        />
        <Cart
          heading={"Exclusive Content"}
          title={
            "Access exclusive shows and movies not available anywhere else, curated just for you."
          }
        />
        <Cart
          heading={"Personalized Recommendations"}
          title={
            "Receive personalized recommendations based on your viewing history and preferences."
          }
        />
      </div>
    </div>
  );
}
