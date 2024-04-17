import pufcornOnSofa from "./Pufcorn_On_Sofa.jpg";

export default function FullPage_Screen2() {
  const divStyle = {
    backgroundImage: `url(${pufcornOnSofa})`,
  };

  return (
    <div
      style={divStyle}
      className="bg-black bg-cover object-cover bg-center  bg-no-repeat  text-white w-full  lg:h-fit"
    >
      <div className="relative bg-black/80 w-full h-full flex flex-col justify-center gap-y-8 lg:px-20 ">

        <p className="w-full text-3xl  lg:text-4xl px-2 pt-0 text-gray-300 font-sans">Discover the Best Videos</p>

        <div className="flex flex-col lg:flex-row gap items-center lg:items-start px-5 py-8 lg:gap-x-8">
          <div className="flex gap-x-4 ">
            <h1 className="bg-[#3D3D42] border-[0.1px] border-gray-200 h-fit px-3.5 py-0.5 rounded-md text-xl text-[#E5EODF]">
              1
            </h1>
            <div className="text-gray-300">
              <p className="text-2xl w-fit text-white text-[#E5EODF] ">
                Featured 
              </p>
             <p>Stay up-to-date with our curated selection of the latest and greatest videos, handpicked by our team of experts.</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <h1 className="bg-[#3D3D42] border-[0.1px] border-gray-200 h-fit px-3.5 py-0.5 rounded-md text-xl text-[#E5EODF]">
              2
            </h1>
            <div className="text-gray-300">
              <p className="text-xl w-fit text-white text-[#E5EODF] ">Exclusive Originals</p>
             <p>Dive into our collection of exclusive original content, Featuring captivating stories and innovative productions.</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <h1 className="bg-[#3D3D42] border-[0.1px] border-gray-200 h-fit px-3.5 py-0.5 rounded-md text-xl text-[#E5EODF]">
              3
            </h1>
            <div>
              <p className="text-xl w-fit text-white  ">Trending Titles</p>
              <p className="text-gray-300">Be the first to discover the hottest videos that everyone is talking about, handpicked by our team of and join the conversation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
