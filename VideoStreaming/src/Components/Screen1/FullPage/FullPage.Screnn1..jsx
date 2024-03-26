import { NavBar_Screen1, Screen1_bgImage } from "../FileContainer.Screen1";

export default function FullPage_Screen1() {
  return (
    <div
      style={{ backgroundImage: `url(${Screen1_bgImage})` }}
      className="bg-cover bg-no-repeat bg-center w-full h-[600px] "
    >
      <div className="relative  w-full h-full  text-white bg-black/40">
        {<NavBar_Screen1 />}
        <div className="absolute top-[20%] left-[10%] w-fit h-fit ">
          <p className="text-red-400 font-[inconsolata] font-semibold text-6xl  ">
            {/* inconsolata */}
            Welcome to Our Video Streaming <br /> Platform
          </p>

          <p className="mt-8  font-arial text-lg  text-[#dad1E6]">
            Experience a world of entertainment at your fingertips.
          </p>
          <p className="mt-4 font-arial text-lg text-[#dad1E6]">
            From exclusive originals to timeless classics, we have it all.
          </p>

          <div className="flex gap-4 mt-[50px]">
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2 rounded-sm hover:scale-[1.02] duration-50">
              Start Watching
            </button>
            <button className="bg-black border-2 border-red-400 text-red-400 font-mono px-3 rounded-sm hover:scale-[1.02] duration-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
