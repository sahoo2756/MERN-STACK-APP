
  
    
  export default function FullPage_Screen6() {
    return (
      <div className="bg-gray-300  font-sans   ">
        <div className="bg-black text-white h-full  px-2 lg:px-20 py-10">
          <h2 className="text-2xl  lg:text-4xl mb-10 text-center font-bold tracking-wide">Discover Your Personalized Watchlist</h2>
  
          <HoverableCart heading={"Save for Later"} title={"Easily keep track of videos you want to watch later by adding them to your personalized watchlist."} color="from-purple-500 to-indigo-500" />
          <HoverableCart heading={"Personalized Recommendations"} title={"Get recommendations tailored just for you based on your viewing habits and preferences."} color="from-orange-500 to-yellow-500" />
          <HoverableCart heading={"Recently Watched"} title={"Quickly access videos you've recently enjoyed and pick up where you left off."} color="from-blue-500 to-cyan-500" />
          <HoverableCart heading={"Favorites"} title={"Bookmark your favorite videos and create a library of content you love."} color="from-green-500 to-lime-500" />
        </div>
      </div>
    );
  }
  
  
  
  
  function HoverableCart({ heading, title, color }) {
    return (
      <div className="group ">
        <div className={`relative bg-gradient-to-br ${color} px-3 lg:px-5 py-3 lg:py-8 flex flex-col gap-3 rounded-lg border border-gray-500 mb-10 transition duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg`}>
          <h1 className="text-lg lg:text-2xl font-bold">{heading}</h1>
          <p className="text-sm text-white font-semibold">{title}</p>
          <div className="absolute top-0 left-0 w-full h-full border border-gray-500 rounded-lg opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
        </div>
      </div>
    );
  }
  
  
  
    