import star from "../assets/Frame 528 (6).png";
import video from "../assets/video-conversation-inspired-latin-female-260nw-1971115277 1.png";
import vector from "../assets/Vector.png";
import shirt from "../assets/Frame 532.png";
import design from "../assets/tshirt-design 1.png";
import frame1 from "../assets/Frame 1171277003 (1).png";
import frame2 from "../assets/Frame 1171277003 (2).png";
import frame3 from "../assets/Frame 1171277003 (3).png";
import frame4 from "../assets/Frame 1171277003 (4).png";
import frame5 from "../assets/Frame 1171277003 (5).png";
import frame6 from "../assets/Frame 1171277003.png";

const Trust = () => {
  return (
    <div className="bg-[#F6F1FF]">
      <div className="text-center">
        <h3 className="font-semibold text-[50px] self-center  ">
          Trusted by Data-Driven Teams
        </h3>
        <div className="flex justify-center items-center text-base font-semibold gap-1">
          <span
            style={{
              backgroundImage:
                "linear-gradient(88deg, #8635FC 0%, #1C1B33 48%, #4EDEFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            See how 500+ teams optimize workflows with Raem Track 5-star rating
            badge
          </span>
          <img src={star} alt="star" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 p-4 md:p-0">
        {/* Card 1 */}
        <div className="w-[400px] md:w-[450px] p-4 flex flex-col justify-center h-[340px] items-center  rounded-2xl bg-white mb-8 md:mb-0 shadow-2xl">
          <img src={design} alt="vector" className="w-15 ml-auto" />
          <img src={shirt} alt="video" width="350" className="mt-4 mb-5" />
          <p className="font-semibold text-base text-center">
            David Thomson CEO at (LLC)
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[410px] md:w-[400px] p-4 flex flex-col justify-center h-[340px] items-center  rounded-2xl bg-white shadow-2xl">
          <img src={vector} alt="vector" className="w-20 ml-auto" />
          <img
            src={video}
            alt="video"
            width="330"
            height="200"
            className="mt-4 mb-5"
          />
          <p className="font-semibold text-base text-center">Margaret Morgan</p>
        </div>
      </div>
      <img src={frame1} alt="" />
      <img src={frame2} alt="" />
      <img src={frame3} alt="" />
      <img src={frame4} alt="" />
      <img src={frame5} alt="" />
      <img src={frame6} alt="" />
    </div>
  );
};

export default Trust;
