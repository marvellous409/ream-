import Image from "../assets/Component 30.png";
import Image1 from "../assets/Component 32.png";
import Image2 from "../assets/Component 35.png";
import Image3 from "../assets/Frame 1171277044.png";
import Image4 from "../assets/Frame 1171277049.png";
import Image5 from "../assets/Vector.png";
import Image6 from "../assets/image 1.png";

const Icons = () => {
  return (
    <div className="w-full max-w-full bg-[#E9F0FF] py-8 px-2 overflow-hidden  mt-8">
      <div className="flex flex-col items-center w-full">
        <h2
          className="text-center text-lg sm:text-xl font-semibold mb-6"
          style={{
            backgroundImage: "linear-gradient(90deg, #8635FC, #4EDEFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trusted by top companies worldwide
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <img
              src={Image}
              alt="Company 1"
              className="w-full max-w-[60px] block"
            />
          </div>

          <div className="flex flex-col items-center">
            <img src={Image3} alt="OpenAI" className="w-8 sm:w-10 block" />
            <p className="font-semibold text-lg mt-0 leading-none">OpenAI</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Image1} alt="Microsoft" className="w-8 sm:w-10 block" />
            <p className="font-semibold text-lg mt-0 leading-none">Microsoft</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Image5} alt="Company 4" className="w-20 block" />
          </div>

          <div className="flex flex-col items-center">
            <img src={Image4} alt="Meta" className="w-8 sm:w-10 block" />
            <p className="font-semibold text-lg mt-0 leading-none">Meta</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Image2} alt="Company 6" className="w-28" />
          </div>

          <div className="flex flex-col items-center">
            <img src={Image6} alt="Company 7" className="w-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
