import Image from "../assets/Frame 1171276830.png";

const HeroSection = () => {
  return (
      <div className="px-4 mt-[143px]">
      <div className="flex  flex-col md:flex-col items-center justify-center gap-10 max-w-[1200px] mx-auto lg:flex-row">

          {/* Text Section */}
          <div className="capitalize text-left w-full xl:w-1/2">
            <h1
              className="text-4xl font-bold leading-[50px] inline-block"
              style={{
                width: "fit-content",
                backgroundImage: "linear-gradient(90deg, #8635FC, #4EDEFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="block">Finally, One Dashboard to</span>
              <span className="block">Rule All Projects —</span>
              <span className="block">Powered by AI.</span>
            </h1>

            <p
              className="text-lg mt-8 max-w-[500px] text-left leading-[30px]"
              style={{
                backgroundImage:
                  "linear-gradient(450deg, #8635FC 24%, #4EDEFF 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DreamTrack is an AI-powered analytics
              <br />
              dashboard that centralizes your data <br />
              from tools like Asana, Jira, Trello, Monday.com, and Slack,
              transforming scattered updates into real-time <br />
              performance insight.
            </p>

            <div className="flex mt-10 gap-4">
              <button className="w-[191px] h-[49px] bg-[#8635FC] hover:bg-purple-800 cursor-pointer rounded-md p- font-serif text-white">
                Try DreamTrack Free
              </button>
              <button className="w-[191px] h-[49px] bg-transparent border border-purple-600 rounded-md  text-purple-600">
                Book a Demo
              </button>
            </div>
          </div>

          {/* Image Section */}
          <img
            className="w-full max-w-[400px] xl:max-w-[500px] object-cover shadow-2xs xl:w-1/2"
            src={Image}
            alt="Image"
          />
        </div>
      </div>
  );
};

export default HeroSection;
