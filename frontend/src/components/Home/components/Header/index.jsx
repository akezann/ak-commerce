import video from "../../../../assets/bgLandingPage.mp4";
import bgImage from "../../../../assets/bgHeader.jpg";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="w-full h-full relative ">
      <img
        src={bgImage}
        alt="Your Image"
        class="w-full h-[436px] object-cover brightness-50"
      />
      {/* Your other React components go here */}
      <div className="flex flex-col gap-4 absolute bottom-20 left-20 z-10">
        <div>
          <h1 className="text-white text-2xl font-bold font-serif object-contain">
            We gave you an original. You reinvented it endlessly.
          </h1>
          <p className="text-white m-0">
            This is a sample React webpage with a video background.
          </p>
        </div>
        <Link to={"/products"}>
          <span className="w-64 text-white text-2xl font-serif px-12 py-2 bg-yellow-500 hover:bg-yellow-600 flex justifey-center items-center gap-4 rounded-full">
            Acheter <i class="fas fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default index;
